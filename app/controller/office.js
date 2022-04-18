const { Controller } = require('egg');

class OfficeController extends Controller {
  /**
   * @api {GET} /api/office 获取事务所信息
   * @apiParam {string} id 事务所ID
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.query;

    let response = {};
    try {
      const result = await ctx.service.office.get(id);
      response = ctx.returnInfo(0, result, '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * GET /api/office/:id/edit
   */
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;

    let response = {};
    try {
      await ctx.service.office.edit(ctx.query, id);
      response = ctx.returnInfo(0, '', '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * POST /api/office
   */
  async create() {
    const { ctx } = this;

    let response = {};
    try {
      const result = await ctx.service.office.create(ctx.request.body);
      response = ctx.returnInfo(0, result, '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * PUT /api/office/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    let response = {};
    try {
      await ctx.service.office.update(ctx.request.body, id);
      response = ctx.returnInfo(0, '', '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * DELETE /api/office/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    let response = {};
    try {
      await ctx.service.office.destroy(id);
      response = ctx.returnInfo(0, '', '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = OfficeController;
  