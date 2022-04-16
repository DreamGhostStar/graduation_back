'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const PostGoodUser = app.model.define('post_good_user', {
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
    tableName: 'post_good_user',
    freezeTableName: true
  });

  PostGoodUser.associate = function() {};

  return PostGoodUser;
};
