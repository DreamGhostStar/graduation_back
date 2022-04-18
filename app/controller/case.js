const { Controller } = require('egg');

class CaseController extends Controller {
  /**
   * @api {GET} /api/case 获取案件信息
   * @apiParam {string} id 案件ID
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.query;

    let response = {};
    try {
      const res = await ctx.service.case.get(id);
      response = ctx.returnInfo(0, res, '获取案件信息成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/case/entrust 发布者委托或取消委托用户
   * @apiParam {string} userID 用户ID
   * @apiParam {string} caseID 案件ID
   * @apiParam {boolean} isEntrust 是否委托
   */
  async entrust() {
    const { ctx } = this;

    let response = {};
    try {
      await ctx.service.case.alterIsEntrust(ctx.request.body);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/case/pick 用户接取案件
   * @apiParam {string} caseID 案件ID
   * @apiParam {boolean} isPick 是否接取
   */
  async pick() {
    const { ctx } = this;

    let response = {};
    try {
      await ctx.service.case.createPick(ctx.request.body);
      response = ctx.returnInfo(0, '', '操作成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {POST} /api/case 新增案件
   * @apiParam {string} content 内容
   * @apiParam {string} title 标题
   * @apiParam {string} introduction 简介
   * @apiParam {string} visit 访问权限
   */
  async create() {
    const { ctx, service } = this;
    const { title, content, introduction, visit } = ctx.request.body;
    const token = await service.jwt.getJWtData();

    let response = {};
    try {
      const res = await ctx.service.case.create({
        author_id: token.userID,
        title,
        content,
        introduction,
        office_id: visit === 'open' ? null : visit
      });
      response = ctx.returnInfo(0, res, '新增成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/case 修改案件
   * @apiParam {string} id 案件ID
   * @apiParam {string} content 内容
   * @apiParam {string} title 标题
   * @apiParam {string} introduction 简介
   */
  async update() {
    const { ctx } = this;
    const { id, content, title, introduction } = ctx.request.body;

    let response = {};
    try {
      await ctx.service.case.update({
        content,
        title,
        introduction
      }, id);
      response = ctx.returnInfo(0, '', '修改成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }

  /**
   * @api {PUT} /api/case/list 获取案件列表
   * @apiParam {number} [page] 页数
   * @apiParam {string} [word] 搜索词
   * @apiParam {string} [userID] 查询某用户ID的案件列表
   * @apiParam {string} [tag] 筛选标签，为all, office
   */
  async list() {
    const { ctx } = this;

    let response = {};
    try {
      const res = await ctx.service.case.getList(ctx.query);
      response = ctx.returnInfo(0, res, '获取数据成功');
    } catch (err) {
      response = ctx.returnInfo(-1, '', err.message);
    }
    ctx.body = response;
  }
}

module.exports = CaseController;
