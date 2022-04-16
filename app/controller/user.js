'use strict';
const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * GET /api/user/:id
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      const result = await ctx.service.user.get(id);
      response.data = result;
      response.code = 0;
    } catch (err) {
      response.message = err;
      response.code = -1;
    }
    ctx.body = response;
  }

  /**
   * GET /api/user/:id/edit
   */
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.edit(ctx.query, id);
      response.code = 0;
    } catch (err) {
      response.message = err;
      response.code = -1;
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/user/enroll 获取通知消息详情
   * @apiParam {string} username 用户名
   * @apiParam {string} password 密码
   * @apiParam {string} verification 验证码
   */
  async create() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.user.create(ctx.request.body);
      response = ctx.returnInfo(0, res, '新增用户信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, err.message, '');
    }
    ctx.body = response;
  }

  /**
   * PUT /api/user/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.update(ctx.request.body, id);
      response.code = 0;
    } catch (err) {
      response.message = err;
      response.code = -1;
    }
    ctx.body = response;
  }

  /**
   * DELETE /api/user/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.destroy(id);
      response.code = 0;
    } catch (err) {
      response.message = err;
      response.code = -1;
    }
    ctx.body = response;
  }
}

module.exports = UserController;
