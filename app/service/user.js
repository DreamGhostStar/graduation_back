'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async get(id) {
    const { ctx } = this;
    const result = await ctx.model.User.findOne({
      where: {
        id
      }
    });
    return result;
  }

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.User.update({
      ...data
    }, {
      where: {
        id
      }
    });
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

  async update(data = {}, id) {
    const { ctx } = this;
    ctx.model.User.update({
      ...data
    }, {
      where: {
        id
      }
    });
  }

  async destroy(id) {
    const { ctx } = this;
    ctx.model.User.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = UserService;
