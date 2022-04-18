const { Service } = require('egg');

class PostGoodUserService extends Service {
  async update(data = {}, id) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    const { isGood } = data;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const goodInfo = await ctx.model.PostGoodUser.findOne({
        where: {
          post_id: id,
          user_id: token.userID
        }
      });
      if (isGood) {
        if(goodInfo) {
          throw new Error('不可重复点赞')
        }
        await ctx.model.PostGoodUser.create({
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
        await ctx.model.PostGoodUser.destroy({
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

module.exports = PostGoodUserService;
