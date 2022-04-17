'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Post = app.model.define('post', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    title: {
      type: STRING(32),
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    introduction: {
      type: TEXT,
      allowNull: false
    },
    createTime: {
      type: DATE,
      allowNull: false
    },
    // 作者ID
    author_id: {
      type: STRING(32),
      allowNull: false
    },
    // 事务所ID
    office_id: {
      type: STRING(32),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'post',
    freezeTableName: true
  });

  Post.associate = function() {
    // 一个贴子有一个作者
    app.model.Post.belongsTo(app.model.User, { foreignKey: 'author_id' });

    // 一个帖子可以属于一个事务所，一个事务所可以有多个贴子
    app.model.Post.belongsTo(app.model.Office, { foreignKey: 'office_id' });
  };

  return Post;
};
