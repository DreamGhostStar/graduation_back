'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 用户
  router.post('/api/user/enroll', controller.user.create);
  router.put('/api/user/enroll', controller.user.login);
  router.put('/api/user/password', controller.user.resetPassword);
  router.put('/api/user/base', controller.user.update);
  router.put('/api/user/lawyer', controller.user.alterLawyerInfo);
  router.get('/api/user', controller.user.show);
  router.put('/api/user/follow', controller.user.followUser);
  router.get('/api/user/follow/list', controller.user.followList);
  router.put('/api/user/identity', controller.user.alterOfficeIdentity);

  // 案件
  router.post('/api/case', controller.case.create);
  router.put('/api/case', controller.case.update);
  router.get('/api/case', controller.case.show);
  router.put('/api/case/entrust', controller.case.entrust);
  router.post('/api/case/pick', controller.case.pick);
  router.get('/api/case/list', controller.case.list);

  // 事务所
  router.get('/api/office', controller.office.show);

  // 验证码
  router.get('/api/user/enroll', controller.home.getVerifyCode);
};
