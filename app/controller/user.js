'use strict';
const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * @api {GET} /api/user 获取用户信息
   * @apiParam {string} [userID] 查找的用户id
   */
  async show() {
    const { ctx, service } = this;
    const { userID } = ctx.query;
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
   * @api {PUT} /api/user/follow 关注/取消关注用户
   * @apiParam {string} userID 用户ID
   * @apiParam {boolean} isFollow 是否关注
   */
  async followUser() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.userFollow.follow(ctx.request.body);
      response = ctx.returnInfo(0, res, '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/user/follow/list 获取关注用户列表
   * @apiParam {string} userID 用户ID
   */
  async followList() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.userFollow.list(ctx.query);
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/user/identity 修改用户事务所身份
   * @apiParam {string} userID 用户ID
   * @apiParam {string} identity 身份
   */
  async alterOfficeIdentity() {
    const { ctx } = this;
    const { identity, userID } = ctx.request.body;

    let response = {};
    try {
      const res = await ctx.service.user.update({
        office_identity: identity
      }, userID);
      response = ctx.returnInfo(0, res, '修改成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = UserController;
