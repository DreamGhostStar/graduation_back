const { Controller } = require('egg');

class PostCollectUserController extends Controller {
  /**
   * @api {PUT} /api/post/collect 收藏/取消收藏贴子
   * @apiParam {string} postID 贴子ID
   * @apiParam {boolean} isCollect 是否点赞
   */
  async update() {
    const { ctx } = this;
    const { postID, isCollect } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.postCollectUser.update({ isCollect }, postID);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = PostCollectUserController;
