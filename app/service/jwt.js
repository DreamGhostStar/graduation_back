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
}

module.exports = JwtService;
