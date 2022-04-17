'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

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

  UserFollow.associate = function() {
    // 一个关注关系有一个关注者
    app.model.UserFollow.belongsTo(app.model.User, { foreignKey: 'from_user_id' });

    // 一个关注关系有一个被关注者
    app.model.UserFollow.belongsTo(app.model.User, { foreignKey: 'to_user_id' });
  };

  return UserFollow;
};
