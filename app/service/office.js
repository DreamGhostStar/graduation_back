const { Service } = require('egg');

class OfficeService extends Service {
  // 获取事务所信息
  async get(id) {
    const { ctx, service } = this;
    const res = [];
    const userDataList = await ctx.model.User.findAll({
      where: {
        office_id: id,
      }
    });
    for (let i = 0; i < userDataList.length; i++) {
      const item = userDataList[i];
      const userDetailInfo = await service.user.get(item.id);
      res.push(userDetailInfo)
    }
    return res;
  }

  // 增加申请进入事务所消息
  async createJoinMessage(data = {}) {
    const { ctx, service } = this;
    const { id } = data;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const message = await ctx.model.Message.findOne({
        where: {
          office_id: id,
          user_id: token.userID
        }
      });
      // 检查之前是否有类似申请
      if (message) {
        throw new Error('之前已发送过类似消息，请耐心等待');
      }
      await ctx.model.Message.create({
        id: await service.home.generateID(),
        office_id: id,
        user_id: token.userID
      }, {
        transaction
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 同意/拒绝进入事务所消息
  async agreeJoinMessage(data = {}, id) {
    const { ctx, service } = this;
    let transaction;
    const { status } = data;
    let userData = null;
    try {
      transaction = await ctx.model.transaction();
      const message = await ctx.model.Message.findByPk(id);
      await message.update({
        status
      }, {
        transaction
      });
      // 更新用户信息
      if (status === 'agree') {
        await ctx.model.User.update({
          office_id: message.office_id,
          office_identity: 'ordinary'
        }, {
          where: {
            id: message.user_id
          },
          transaction
        });
      }
      await transaction.commit();
      userData = await service.user.get(message.user_id);
      return userData;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 获取事务所加入信息
  async getJoinMessage(data) {
    const { ctx, service } = this;
    const { officeID } = data;
    const res = [];
    const list = await ctx.model.Message.findAll({
      where: {
        office_id: officeID
      }
    });
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const userDetailInfo = await service.user.get(item.user_id);
      res.push({
        user: userDetailInfo,
        id: item.id,
        status: item.status
      });
    }

    return res;
  }

  // 根据搜索词获取事务所信息
  async getOfficeWithWord(data) {
    const { ctx } = this;
    const { word } = data;
    // 模糊查询
    const requestObj = {
      where: {
        value: { $like: `%${word}%` }
      },
    };
    const res = [];
    const list = await ctx.model.Office.findAll(requestObj);
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      res.push({
        id: item.id,
        value: item.value,
        identity: 'ordinary'
      });
    }

    return res;
  }

  // 从事务所中移除用户
  async removeUserInOffice(data) {
    const { ctx, service } = this;
    const { userID } = data;
    const token = await service.jwt.getJWtData();

    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const operationUser = await ctx.model.User.findByPk(token.userID);
      if (operationUser.office_identity !== 'Administration') {
        throw new Error('权限不足');
      }
      await ctx.model.User.update({
        office_id: null,
        office_identity: null
      }, {
        where: {
          id: userID
        },
        transaction
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = OfficeService;
