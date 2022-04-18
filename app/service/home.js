'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const qiniu = require('qiniu');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const md5 = require('md5');
const bucket = 'lawyer-test'; // 要上传的空间名
const imageUrl = 'lawyer.youchen-blog.cn'; // 空间绑定的域名
const accessKey = 'nzxCQpB1wc9C-T_XPAIHqs_gGi_itNepD6hHfmew'; // Access Key
const secretKey = 'eaK7aWcWCywrx6Qm25-HaOvTB_AMnW-q2JIntYqk'; // Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;

class HomeService extends Service {
  // 生成图片验证码
  async generateImage() {
    const { ctx } = this;
    const captcha = svgCaptcha.create({
      size: 6,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#f00'
    });
    let res;
    if (!captcha.data) {
      res = ctx.returnInfo(403, '', '请求验证图片错误');
    }

    ctx.session.maxAge = 1000 * 60 * 5; // 5分钟
    ctx.session.renew = false; // 设置在连续访问的时候不刷新剩余时间
    ctx.session.imageVerifyCode = captcha.text;
    res = ctx.returnInfo(0, captcha.data, '请求成功');
    return res;
  }

  // 生成随机的数据库表id
  async generateID() {
    return new Promise((resolve, reject) => {
      try {
        crypto.randomBytes(4, (err, buf) => {
          resolve(buf.toString('hex'));
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * @description 上传文件（图片）到七牛云
   * @return {object} 返回信息
   * @memberof UploadFileService
   */
  async uploadFiles() {
    const { ctx, service } = this;
    const url = ctx.request.url
    const stream = await ctx.getFileStream();
    const filename = md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
    const localFilePath = path.join(__dirname, '../public/uploads', filename);
    const writeStream = fs.createWriteStream(localFilePath);
    const uploadToken = putPolicy.uploadToken(mac);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();
      const imgSrc = await new Promise((resolve, reject) => {
        formUploader.putFile(
          uploadToken,
          filename,
          localFilePath,
          putExtra,
          async (respErr, respBody, respInfo) => {
            if (respErr) {
              reject(new Error(respErr.message));
            }
            if (respInfo.statusCode === 200) {
              resolve(imageUrl + '/' + respBody.key);
            } else {
              ctx.status = respInfo.statusCode
              await service.systemLog.add(JSON.stringify(respInfo), url) // 打印日志
              reject(new Error(respInfo.error));
            }

            fs.unlinkSync(localFilePath); // 上传之后删除本地文件
          }
        );
      });
      if (imgSrc !== '') {
        return {
          errNo: 0,
          data: {
            url: `http://${imgSrc}`
          },
          message: '上传成功'
        };
      }

      return {
        errNo: -1,
        data: {},
        message: '服务器异常'
      };
    } catch (err) {
      await sendToWormhole(stream); // 如果出现错误，关闭管道
      return {
        errNo: -1,
        data: {},
        message: err.message
      };
    }
  }
}

module.exports = HomeService;
