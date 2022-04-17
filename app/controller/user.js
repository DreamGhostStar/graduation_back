'use strict';
const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * @api {GET} /api/user 获取用户信息
   * @apiParam {string} [userID] 查找的用户id
   */
  async show() {
    const { ctx, service } = this;
    const { userID } = ctx.params;
    const token = await service.jwt.getJWtData();

    let response = {};
    try {
      const res = await ctx.service.user.get(userID || token.userID);
      response = ctx.returnInfo(0, res, '获取用户信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
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
   * @api {POST} /api/user/enroll 注册用户
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
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/user/enroll 用户登录
   * @apiParam {string} username 用户名
   * @apiParam {string} password 密码
   */
  async login() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.user.login(ctx.request.body);
      response = ctx.returnInfo(0, res, '');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/user/password 重置密码
   * @apiParam {string} [username] 用户名
   * @apiParam {string} [beforePassword] 之前的密码
   * @apiParam {string} afterPassword 更新后的密码
   */
  async resetPassword() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.user.resetPassword(ctx.request.body);
      response = ctx.returnInfo(0, res, '登录成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/user/base 修改用户信息
   * @apiParam {string} username 用户名
   * @apiParam {string} nickname 昵称
   * @apiParam {string} avatar 头像
   * @apiParam {string} introduction 简介s
   */
  async update() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.user.update(ctx.request.body);
      response = ctx.returnInfo(0, res, '');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/user/lawyer 修改用户律师信息
   * @apiParam {string} officeID 事务所ID
   * @apiParam {string} occupation 职业
   * @apiParam {string} userID 被修改的用户ID
   */
  async alterLawyerInfo() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.userLawyer.occupation(ctx.request.body);
      response = ctx.returnInfo(0, res, '修改成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
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
