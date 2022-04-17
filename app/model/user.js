'use strict';

module.exports = app => {
  const { STRING, ENUM, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: STRING(16),
      primaryKey: true
    },
    avatar: {
      type: STRING(255),
      allowNull: false,
      defaultValue: 'http://shoe.youchen-blog.cn/default.jpg'
    },
    nickname: {
      type: STRING(32),
      allowNull: false
    },
    username: {
      type: STRING(32),
      allowNull: false,
      unique: true
    },
    password: {
      type: STRING(128),
      allowNull: false
    },
    introduction: {
      type: STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    // 职业
    occupation: {
      type: ENUM('lawyer'),
      allowNull: true
    },
    // 权限
    identity: {
      type: ENUM('user', 'administrator'),
      allowNull: false,
      defaultValue: 'user'
    },
    // 加入时间
    joinTime: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    // 所属事务所ID
    office_id: {
      type: STRING(32),
      allowNull: true
    },
    office_identity: {
      type: ENUM('ordinary', 'Administration'),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'user',
    freezeTableName: true
  });

  User.associate = function () {
    // 一个用户属于一个律师事务所，一个事务所包含多个用户（多对一）
    app.model.User.belongsTo(app.model.Office, { foreignKey: 'office_id' });

    // 一个用户有多个案件
    app.model.User.hasMany(app.model.Case, { foreignKey: 'author_id' });

    // 一个用户有多个收藏贴子
    app.model.User.hasMany(app.model.PostCollectUser, { foreignKey: 'user_id' });

    // 一个用户有多个点赞帖子，一个帖子有多个点赞用户
    app.model.User.belongsToMany(app.model.Post, {
      through: app.model.PostGoodUser,
      foreignKey: 'user_id',
      otherKey: 'post_id'
    });

    // 一个用户有多个收藏帖子，一个帖子有多个收藏用户
    app.model.User.belongsToMany(app.model.Post, {
      through: app.model.PostCollectUser,
      foreignKey: 'user_id',
      otherKey: 'post_id'
    });
  };

  return User;
};
