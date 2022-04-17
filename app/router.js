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

  // 验证码
  router.get('/api/user/enroll', controller.home.getVerifyCode);
};
