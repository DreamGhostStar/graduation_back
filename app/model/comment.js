'use strict';

// 加入事务所消息
module.exports = app => {
  const { DATE, STRING } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    author_id: {
      type: STRING(32),
      allowNull: false
    },
    time: {
      type: DATE,
      allowNull: false
    },
    content: {
      type: STRING(255),
      allowNull: false
    },
    post_id: {
      type: STRING(32),
      allowNull: false
    },
    reply_comment_id: {
      type: STRING(32),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'comment',
    freezeTableName: true
  });

  Comment.associate = function() {
    // 一对一，一个评论有一个作者
    app.model.Comment.belongsTo(app.model.Office, { foreignKey: 'author_id' });

    // 一对一，一个评论有一个贴子
    app.model.Comment.belongsTo(app.model.Post, { foreignKey: 'post_id' });

    // 一对一，一个二级评论有一个顶部评论
    app.model.Comment.belongsTo(app.model.Comment, { foreignKey: 'reply_comment_id' });
  };

  return Comment;
};
