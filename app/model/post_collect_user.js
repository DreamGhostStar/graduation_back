'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const PostCollectUser = app.model.define('post_collect_user', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: STRING(32),
      allowNull: false
    },
    post_id: {
      type: STRING(32),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'post_collect_user',
    freezeTableName: true
  });

  PostCollectUser.associate = function() {};

  return PostCollectUser;
};
