'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const UserFollow = app.model.define('user_follow', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    // 关注者
    from_user_id: {
      type: STRING(32),
      allowNull: false
    },
    // 被关注者
    to_user_id: {
      type: STRING(32),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'user_follow',
    freezeTableName: true
  });

  UserFollow.associate = function() {};

  return UserFollow;
};
