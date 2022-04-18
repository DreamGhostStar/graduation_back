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
  router.put('/api/office/apply', controller.office.createJoinMessage);
  router.put('/api/office/join', controller.office.agreeJoinMessage);
  router.get('/api/office/message/join', controller.office.getJoinMessage);
  router.get('/api/office/search', controller.office.getOfficeWithWord);
  router.delete('/api/office', controller.office.removeUser);

  // 日程
  router.post('/api/schedule', controller.schedule.create);
  router.get('/api/schedule', controller.schedule.list);
  router.put('/api/schedule', controller.schedule.update);
  router.delete('/api/schedule', controller.schedule.destroy);

  // 文件
  router.post('/api/image', controller.home.file);

  // 贴子
  router.post('/api/post', controller.post.create);
  router.get('/api/post', controller.post.show);
  router.put('/api/post', controller.post.update);
  router.put('/api/post/good', controller.postGoodUser.update);
  router.put('/api/post/collect', controller.postCollectUser.update);
  router.get('/api/post/list', controller.post.getList);
  router.get('/api/user/post/list', controller.post.getListByUserID);

  // 评论
  router.post('/api/comment', controller.comment.create);
  router.get('/api/comment', controller.comment.show);
  router.put('/api/comment/good', controller.comment.good);

  // 验证码
  router.get('/api/user/enroll', controller.home.getVerifyCode);
};
