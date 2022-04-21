'use strict';

const Service = require('egg').Service;

class UserFollowService extends Service {
  async follow(data) {
    const { ctx, service } = this;
    const { userID, isFollow } = data;
    const token = await service.jwt.getJWtData();
    const followUserData = await ctx.model.UserFollow.findOne({
      where: {
        from_user_id: token.userID,
        to_user_id: userID
      }
    });

    let transaction;
    try {
      transaction = await ctx.model.transaction();
      if (isFollow) {
        if (followUserData) {
          throw new Error('你已成功关注');
        } else {
          await ctx.model.UserFollow.create({
            id: await service.home.generateID(),
            from_user_id: token.userID,
            to_user_id: userID
          }, {
            transaction
          });
        }
      } else {
        if (followUserData) {
          await followUserData.destroy();
        } else {
          throw new Error('关注关系不存在');
        }
      }
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async list(data) {
    const { userID } = data;
    const { ctx } = this;

    const followUserList = await ctx.model.UserFollow.findAll({
      include: [
      {
        model: ctx.model.User
      }],
      where: {
        from_user_id: userID
      }
    });
    const result = followUserList.map(item => {
      return {
        id: item.user.id,
        isFollow: true,
        avatar: item.user.avatar,
        nickname: item.user.nickname
      }
    })
    return result;
  }
}

module.exports = UserFollowService;
