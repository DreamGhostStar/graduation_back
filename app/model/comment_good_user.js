'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const CommentGoodUser = app.model.define('comment_good_user', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: STRING(32),
      allowNull: false
    },
    comment_id: {
      type: STRING(32),
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
