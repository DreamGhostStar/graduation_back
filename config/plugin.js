'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  auth: {
    enable: true,
    package: 'egg-router-auth'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  }
};
