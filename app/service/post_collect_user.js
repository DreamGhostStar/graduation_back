const { Service } = require('egg');

class PostCollectUserService extends Service {
  async update(data = {}, id) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    const { isCollect } = data;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const goodInfo = await ctx.model.PostCollectUser.findOne({
        where: {
          post_id: id,
          user_id: token.userID
        }
      });
      if (isCollect) {
        if(goodInfo) {
          throw new Error('不可重复收藏')
        }
        await ctx.model.PostCollectUser.create({
          id: await service.home.generateID(),
          post_id: id,
          user_id: token.userID
        }, {
          transaction
        });
      } else {
        if(!goodInfo) {
          throw new Error('系统繁忙')
        }
        await ctx.model.PostCollectUser.destroy({
          where: {
            post_id: id,
            user_id: token.userID
          }
        }, {
          transaction
        });
      }
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = PostCollectUserService;
