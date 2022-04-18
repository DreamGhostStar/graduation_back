/* eslint valid-jsdoc: "off" */

'use strict';
const secret = require('./secret.json');
const Op = require('sequelize').Op;

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1650070149152_9539';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库
  config.sequelize = {
    dialect: 'mysql',
    database: 'graduation',
    host: '106.14.174.206',
    port: 3306,
    username: 'root',
    password: secret.mysql,
    // 使用默认运算符别名
    operatorsAliases:{
      $eq: Op.eq,
      $ne: Op.ne,
      $gte: Op.gte,
      $gt: Op.gt,
      $lte: Op.lte,
      $lt: Op.lt,
      $not: Op.not,
      $in: Op.in,
      $notIn: Op.notIn,
      $is: Op.is,
      $like: Op.like,
      $notLike: Op.notLike,
      $iLike: Op.iLike,
      $notILike: Op.notILike,
      $regexp: Op.regexp,
      $notRegexp: Op.notRegexp,
      $iRegexp: Op.iRegexp,
      $notIRegexp: Op.notIRegexp,
      $between: Op.between,
      $notBetween: Op.notBetween,
      $overlap: Op.overlap,
      $contains: Op.contains,
      $contained: Op.contained,
      $adjacent: Op.adjacent,
      $strictLeft: Op.strictLeft,
      $strictRight: Op.strictRight,
      $noExtendRight: Op.noExtendRight,
      $noExtendLeft: Op.noExtendLeft,
      $and: Op.and,
      $or: Op.or,
      $any: Op.any,
      $all: Op.all,
      $values: Op.values,
      $col: Op.col
    }
  };

  // 路由验证
  config.auth = {
    enableJwtVerify: false, // true代表启用jwt验证，false代表不启用，默认为true
    // jwtExclude: ['/api/login', '/api/public/verification'], // 验证用户登录需要跳过的路由
    errorCode: -1, // 错误的code,
    output: 'apidoc/output', // apidoc输出目录，必选
    template: 'apidoc/template' // apidoc模板，可选
  };

  // 安全设置
  config.security = {
    csrf: {
      enable: true
    }
  };

  // jwt设置
  config.jwt = {
    // 自定义 token 的加密条件字符串
    secret: 'ylw'
  };

  // redis
  config.redis = {
    client: {
      port: 6379,
      host: '106.14.174.206',
      password: secret.redis,
      db: 1
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
