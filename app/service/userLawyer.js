'use strict';

const Service = require('egg').Service;

class UserLawyerService extends Service {
  // 修改职业信息
  async occupation(data) {
    const { ctx, service } = this;
    const { userID, officeID, occupation } = data;
    const token = await service.jwt.getJWtData();
    // 获取当前用户信息，验证是否有权限
    const userData = await service.user.get(token.userID);
    if (!userData.office_id || userData.office_id !== officeID || userData.office_identity !== 'Administration') {
      throw new Error('操作者权限不足');
    }

    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.User.update({
        office_id: officeID,
        occupation,
        office_identity: 'ordinary'
      }, {
        where: {
          id: userID
        }
      });
      const updatedUserData = await service.user.get(userID);
      await transaction.commit();
      return updatedUserData;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = UserLawyerService;
