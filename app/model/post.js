'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Post = app.model.define('post', {
    id: {
      type: INTEGER,
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
      type: INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'post',
    freezeTableName: true
  });

  Post.associate = function() {
    // 一个贴子有一个作者
    app.model.Post.belongsTo(app.model.User, { foreignKey: 'author_id' });
  };

  return Post;
};
