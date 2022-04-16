'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const CommentGoodUser = app.model.define('comment_good_user', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    comment_id: {
      type: INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'comment_good_user',
    freezeTableName: true
  });

  CommentGoodUser.associate = function() {};

  return CommentGoodUser;
};
