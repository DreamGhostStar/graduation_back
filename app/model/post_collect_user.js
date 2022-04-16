'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const PostCollectUser = app.model.define('post_collect_user', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    post_id: {
      type: INTEGER,
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
