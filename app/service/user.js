'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async get(id) {
    const { ctx } = this;
    const result = await ctx.model.User.findOne({
      include: [
      {
        model: ctx.model.Post,
      }, {
        model: ctx.model.Case,
      }, {
        model: ctx.model.PostCollectUser,
      }],
      where: {
        id
      }
    });
    // 查找所属事务所信息
    if (result.office_id) {
      const officeInfo = await ctx.model.Office.findOne({
        where: {
          id: result.office_id
        }
      });
      result.dataValues.office = {
        ...officeInfo.dataValues,
        identity: result.office_identity
      };
    } else {
      result.dataValues.office = null;
    }
    // 查找被关注信息和关注信息
    const followedInfo = await ctx.model.UserFollow.findAll({
      where: {
        to_user_id: id
      }
    });
    const followInfo = await ctx.model.UserFollow.findAll({
      where: {
        from_user_id: id
      }
    });
    result.dataValues.followedNumber = followedInfo.length;
    result.dataValues.followNumber = followInfo.length;
    // 查询是否是管理员
    result.dataValues.isAdministrator = result.identity === 'administrator';
    // 获取案件数量、贴子数量和收藏贴子数量
    result.dataValues.caseNumber = result.cases.length;
    result.dataValues.postsNumber = result.posts.length;
    result.dataValues.collectNumber = result.post_collect_users.length;
    return result;
  }

  // 创建用户
  async create(data) {
    const { ctx, service } = this;
    const { username, password, verification } = data;
    const sessionVerifyCode = ctx.session.imageVerifyCode;
    console.log(ctx.session.imageVerifyCode);
    if (!sessionVerifyCode) {
      throw new Error('验证码已过期');
    }
    // TODO: 对验证码做校验
    console.error(ctx.session.imageVerifyCode.toLowerCase() === verification.toLowerCase());

    let transaction;
    try {
      transaction = await ctx.model.transaction();

      const userData = await ctx.model.User.create({
        id: await service.home.generateID(),
        password,
        username,
        nickname: username
      }, {
        transaction
      });

      // 生成 token 的方式
      const token = await service.jwt.getToken({
        userID: userData.id
      }, {
        // 时间以秒为基准，过期时间为7天
        expiresIn: 60 * 60 * 24 * 7
      });
      await transaction.commit();
      return token;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 用户登录
  async login(data) {
    const { ctx, service } = this;
    const { username, password } = data;
    const userData = await ctx.model.User.findOne({
      where: {
        username,
        password
      }
    });
    // 生成 token 的方式
    const token = await service.jwt.getToken({
      userID: userData.id
    }, {
      // 时间以秒为基准，过期时间为7天
      expiresIn: 60 * 60 * 24 * 7
    });
    if (!userData) {
      throw new Error('未找到此用户');
    }
    return token;
  }

  // 重置密码
  async resetPassword(data) {
    const { ctx, service } = this;
    const { username, beforePassword, afterPassword } = data;
    const token = await service.jwt.getJWtData();
    let findObj = {};

    if (token) {
      findObj = {
        id: token.userID,
        password: beforePassword
      };
    } else {
      findObj = {
        username
      };
    }
    const userData = await ctx.model.User.findOne({
      where: findObj
    });
    if (!userData) {
      throw new Error('未找到此用户');
    }

    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.User.update({
        password: afterPassword
      }, {
        where: {
          id: userData.id
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

  // 更新用户信息
  async update(data, userID) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.User.update({
        ...data
      }, {
        where: {
          id: userID || token.userID
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

module.exports = UserService;
