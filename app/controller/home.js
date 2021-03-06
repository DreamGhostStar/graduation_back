'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getVerifyCode() {
    const { ctx } = this;

    let response = {};
    try {
      response = await ctx.service.home.generateImage();
    } catch (err) {
      response = ctx.returnInfo(-1, '', err);
    }
    ctx.body = response;
  }

  async file() {
    const { ctx, service } = this;
    ctx.body  = await service.home.uploadFiles();
  }
}

module.exports = HomeController;
