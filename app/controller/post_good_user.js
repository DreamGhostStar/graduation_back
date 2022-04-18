const { Controller } = require('egg');

class PostGoodUserController extends Controller {
  /**
   * @api {PUT} /api/post/good 点赞/取消点赞贴子
   * @apiParam {string} postID 贴子ID
   * @apiParam {boolean} isGood 是否点赞
   */
  async update() {
    const { ctx } = this;
    const { postID, isGood } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.postGoodUser.update({ isGood }, postID);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = PostGoodUserController;
