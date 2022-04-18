const { Controller } = require('egg');

class ScheduleController extends Controller {
  /**
   * @api {GET} /api/schedule 获取日程列表
   * @apiParam {string} year 年
   * @apiParam {string} month 月
   */
  async list() {
    const { ctx, service } = this;
    const { year, month } = ctx.query;
    const token = await service.jwt.getJWtData();

    let response = {};
    try {
      const res = {};
      const list = await ctx.model.Schedule.findAll({
        where: {
          year: parseInt(year),
          month: parseInt(month),
          author_id: token.userID
        }
      });
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const detailInfo = await service.schedule.get(item.id);
        res[`${month}-${detailInfo.day}`] = detailInfo;
      }
      response = ctx.returnInfo(0, res, '获取成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/schedule 增加日程
   * @apiParam {string} recordTime 提醒时间
   * @apiParam {string} content 内容
   * @apiParam {string} type 类型
   */
  async create() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.schedule.create(ctx.request.body);
      response = ctx.returnInfo(0, res, '增加成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/schedule 修改日程
   * @apiParam {string} id 日程ID
   * @apiParam {string} content 内容
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.schedule.update(ctx.request.body, id);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {DELETE} /api/schedule 删除日程
   * @apiParam {string} id 日程ID
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.schedule.destroy(id);
      response = ctx.returnInfo(0, '', '删除成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = ScheduleController;
