const { Controller } = require('egg');

class PostController extends Controller {
  /**
   * @api {GET} /api/post 获取贴子
   * @apiParam {string} id 贴子id
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.query;

    let response = {};
    try {
      const res = await ctx.service.post.get(id);
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/user/post/list 根据用户ID获取贴子
   * @apiParam {string} userID 用户ID
   * @apiParam {string} type 类型
   */
  async getListByUserID() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.post.getListByID(ctx.query);
      response = ctx.returnInfo(0, res, '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {GET} /api/post/list 获取贴子列表
   * @apiParam {string} [page] 页数
   * @apiParam {string} [word] 搜索词
   */
  async getList() {
    const { ctx } = this;
    let response = {};
    try {
      const res = await ctx.service.post.getList(ctx.query);
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/post 新增贴子
   * @apiParam {string} title 标题
   * @apiParam {string} content 内容
   * @apiParam {string} introduction 简介
   */
  async create() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.post.create(ctx.request.body);
      response = ctx.returnInfo(0, res, '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/post 修改贴子
   * @apiParam {string} id 贴子ID
   * @apiParam {string} title 标题
   * @apiParam {string} content 内容
   * @apiParam {string} introduction 简介
   */
  async update() {
    const { ctx } = this;
    const { title, content, id, introduction } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.post.update({
        title,
        content,
        introduction
      }, id);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = PostController;
