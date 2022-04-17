'use strict';

const Service = require('egg').Service;

class JwtService extends Service {
  /**
   * @description 获取jwt生成的token
   * @param {Object} storeData 将要在token中存储的数据
   * @param {Object} options 额外设置
   * @return {string} token字符串
   * @memberof JwtService
   */
  async getToken(storeData, options) {
    const { app } = this;
    const token = app.jwt.sign(storeData, app.config.jwt.secret, options);

    return token;
  }

  /**
   * @description 获取jwt中传递的数据
   * @return {Object} jwt中传递的数据
   * @memberof JwtService
   */
  async getJWtData() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    const secret = app.config.jwt.secret;
    if (!token) {
      return null;
    }
    const tokenData = app.jwt.verify(token, secret);

    return tokenData;
  }
}

module.exports = JwtService;
