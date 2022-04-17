'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const PostGoodUser = app.model.define('post_good_user', {
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
    tableName: 'post_good_user',
    freezeTableName: true
  });

  PostGoodUser.associate = function() {};

  return PostGoodUser;
};
