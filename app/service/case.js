const { Service } = require('egg');

class CaseService extends Service {
  // 获取单个信息
  async get(id) {
    const { ctx, service } = this;
    let isPick = false;
    const token = await service.jwt.getJWtData();
    // 获取案件信息
    const result = await ctx.model.Case.findOne({
      include: [
      {
        model: ctx.model.User
      }],
      where: {
        id,
      }
    });
    // 获取关注用户信息
    const followUser = await ctx.model.UserFollow.findOne({
      where: {
        from_user_id: token.userID,
        to_user_id: result.user.id
      }
    });
    // 获取接取用户信息
    const pickUserList = await ctx.model.CasePickUser.findAll({
      include: [
      {
        model: ctx.model.User
      }],
      where: {
        case_id: result.id
      }
    });
    // 重构接取用户信息
    const resPickUserList = pickUserList.map(item => {
      if (item.user.id === token.userID) {
        isPick = true;
      }
      return {
        id: item.user.id,
        name: item.user.nickname,
        introduction: item.user.introduction,
        avatar: item.user.avatar,
        isPick: item.is_pick
      }
    })
    // 构建作者信息
    result.dataValues.author = {
      id: result.user.id,
      name: result.user.nickname,
      introduction: result.user.introduction,
      avatar: result.user.avatar
    };
    result.dataValues.isMy = token.userID === result.user.id;
    result.dataValues.isFollow = followUser !== undefined;
    // 构建接取信息
    result.dataValues.pickUser = {
      isLook: token.userID === result.user.id,
      isPick: isPick,
      list: resPickUserList
    }
    return result;
  }

  // 修改接取人状态
  async alterIsEntrust(data) {
    const { ctx } = this;
    const { userID, caseID, isEntrust } = data;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.CasePickUser.update({
        is_pick: isEntrust
      }, {
        where: {
          user_id: userID,
          case_id: caseID
        }
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 新增或删除接取
  async createPick(data) {
    const { ctx, service } = this;
    const { caseID, isPick } = data;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      if (isPick) {
        await ctx.model.CasePickUser.create({
          id: await service.home.generateID(),
          case_id: caseID,
          user_id: token.userID,
          is_pick: false
        }, {
          transaction
        });
      } else {
        await ctx.model.CasePickUser.destroy({
          where: {
            case_id: caseID,
            user_id: token.userID,
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

  // 创建
  async create(data = {}) {
    const { ctx, service } = this;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.Case.create({
        ...data,
        id: await service.home.generateID()
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

  // 修改
  async update(data = {}, id) {
    const { ctx } = this;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.Case.update({
        ...data
      }, {
        where: {
          id,
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

  // 获取案件列表
  async getList(data) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    const { page, word, userID, tag } = data;
    const pageSize = 10;
    let requestObj = {};
    const userInfo = await ctx.model.User.findOne({
      where: {
        id: token.userID
      }
    });
    let res = {
      list: []
    };
    let cases = [];
    let pageRequestObj = {};
    if (!ctx.isNull(tag)) {
      // 标签
      pageRequestObj = {
        office_id: tag === 'all' ? null : userInfo.office_id
      };
    } 
    if (!ctx.isNull(page)) {
      // 分页查询
      requestObj = {
        where: pageRequestObj,
        offset: pageSize * (page - 1), // 查询的起始下标
        limit: pageSize // 查询的条数
      }
    } else if (word) {
      // 模糊查询
      requestObj = {
        where: {
          title: { $like: `%${word}%` },
          ...pageRequestObj
        },
      };
    } else if (userID) {
      // 获取到某个用户的发起的案件
      requestObj = {
        where: {
          author_id: userID,
          ...pageRequestObj
        },
      };
    } else {
      // 说明只有tag
      requestObj = {
        where: pageRequestObj
      }
    }
    cases = await ctx.model.Case.findAll(requestObj);
    for (let i = 0; i < cases.length; i++) {
      const caseItem = cases[i];
      const info = await this.get(caseItem.id);
      res.list.push(info)
    }
    return res;
  }
}

module.exports = CaseService;
