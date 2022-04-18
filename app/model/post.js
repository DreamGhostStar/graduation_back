'use strict';

module.exports = app => {
  const { STRING, DATE, TEXT } = app.Sequelize;

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
      allowNull: false,
      defaultValue: new Date()
    },
    // 作者ID
    author_id: {
      type: STRING(32),
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

    // 一个贴子有多个收藏
    app.model.Post.hasMany(app.model.PostCollectUser, { foreignKey: 'post_id' });

    // 一个贴子有多个点赞
    app.model.Post.hasMany(app.model.PostGoodUser, { foreignKey: 'post_id' });

    // 一个贴子有多个评论
    app.model.Post.hasMany(app.model.Comment, { foreignKey: 'post_id' });

    // 一个贴子有多个关注者信息
    app.model.Post.hasMany(app.model.UserFollow, { foreignKey: 'to_user_id' });
  };

  return Post;
};
