const { Service } = require('egg');

class ScheduleService extends Service {
  // 获取
  async get(id) {
    const { ctx } = this;
    const result = await ctx.model.Schedule.findOne({
      where: {
        id,
      }
    });
    result.dataValues.key = result.id;
    return result;
  }

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.Schedule.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  // 增加
  async create(data = {}) {
    const { ctx, service } = this;
    const { recordTime, content, type } = data;
    const token = await service.jwt.getJWtData();
    const date = new Date(parseInt(recordTime));
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const res = await ctx.model.Schedule.create({
        content,
        type,
        record_time: recordTime,
        id: await service.home.generateID(),
        author_id: token.userID,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }, {
        transaction
      });
      await transaction.commit();
      res.dataValues.key = res.id;
      return res;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 修改
  async update(data = {}, id) {
    const { ctx, service } = this;
    const { content } = data;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.Schedule.update({
        content
      }, {
        where: {
          id,
          author_id: token.userID
        }
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 删除日程
  async destroy(id) {
    const { ctx } = this;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.Schedule.destroy({
        where: {
          id,
        }
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = ScheduleService;
