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

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.Office.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  async create(data = {}) {
    const { ctx } = this;
    const result = {};
    const res = await ctx.model.Office.create({
      ...data
    });
    if (res) {
      result.id = res.id;
    }
    return result;
  }

  async update(data = {}, id) {
    const { ctx } = this;
    ctx.model.Office.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  async destroy(id) {
    const { ctx } = this;
    ctx.model.Office.destroy({
      where: {
        id,
      }
    });
  }
}

module.exports = OfficeService;