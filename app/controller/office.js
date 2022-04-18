const { Controller } = require('egg');

class OfficeController extends Controller {
  /**
   * @api {GET} /api/office 获取事务所信息
   * @apiParam {string} id 事务所ID
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.query;

    let response = {};
    try {
      const result = await ctx.service.office.get(id);
      response = ctx.returnInfo(0, result, '获取信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/office/apply 申请进入事务所
   * @apiParam {string} id 事务所ID
   */
  async createJoinMessage() {
    const { ctx } = this;

    let response = {};
    try {
      await ctx.service.office.createJoinMessage(ctx.request.body);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/office/join 同意/拒绝申请进入事务所
   * @apiParam {string} id 消息ID
   * @apiParam {string} status 状态
   */
  async agreeJoinMessage() {
    const { ctx } = this;
    const { id, status } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.office.agreeJoinMessage({ status }, id);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/office/message/join 获取加入消息
   * @apiParam {string} officeID 事务所ID
   */
  async getJoinMessage() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.office.getJoinMessage(ctx.query);
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/office/search 搜索事务所信息
   * @apiParam {string} word 搜索词
   */
  async getOfficeWithWord() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.office.getOfficeWithWord(ctx.query);
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {DELETE} /api/office 从事务所中删除用户
   * @apiParam {string} userID 被删除的用户ID
   */
  async removeUser() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.office.removeUserInOffice(ctx.request.body);
      response = ctx.returnInfo(0, res, '移除成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = OfficeController;
