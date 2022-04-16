'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const UserFollow = app.model.define('user_follow', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    // 关注者
    from_user_id: {
      type: INTEGER,
      allowNull: false
    },
    // 被关注者
    to_user_id: {
      type: INTEGER,
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
