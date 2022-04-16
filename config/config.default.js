/* eslint valid-jsdoc: "off" */

'use strict';
const secret = require('./secret.json');

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
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'graduation',
    host: '106.14.174.206',
    port: 3306,
    username: 'root',
    // TODO: 需将此密码放入env中
    password: secret.mysql
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
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
      // TODO: 真实环境下需开启
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
      // TODO: 需将此密码放入env中
      password: secret.redis,
      db: 1
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
