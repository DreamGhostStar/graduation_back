'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
const crypto = require('crypto');
// const https = require('https');
// const qs = require('querystring');

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
}

module.exports = HomeService;
