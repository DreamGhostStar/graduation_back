const { Controller } = require('egg');

class CommentController extends Controller {
  /**
   * @api {GET} /api/comment 根据贴子ID获取评论
   * @apiParam {string} id 贴子ID
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.query;

    let response = {};
    try {
      const result = await ctx.service.comment.get(id);
      response = ctx.returnInfo(0, result, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/comment/good 点赞/取消点赞帖子评论
   * @apiParam {string} id 评论id
   * @apiParam {boolean} isGood 是否点赞
   */
  async good() {
    const { ctx } = this;
    const { id, isGood } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.comment.good(isGood, id);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/comment 创建评论
   * @apiParam {string} value 评论内容
   * @apiParam {string} postID 贴子ID
   * @apiParam {string} [replyCommentID] 回复的评论ID
   */
  async create() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.comment.create(ctx.request.body);
      response = ctx.returnInfo(0, res, '创建成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * PUT /api/comment/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.comment.update(ctx.request.body, id);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }

  /**
   * DELETE /api/comment/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.comment.destroy(id);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }
}

module.exports = CommentController;
