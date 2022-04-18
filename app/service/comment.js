const { Service } = require('egg');

class CommentService extends Service {
  // 根据贴子ID获取评论
  async get(id) {
    const { ctx } = this;
    const commentList = await ctx.model.Comment.findAll({
      where: {
        post_id: id,
        top_comment_id: null
      }
    });
    const res = [];
    for (let i = 0; i < commentList.length; i++) {
      const item = commentList[i];
      res.push(await this.getByCommentID(item.id, true));
    }
    return res;
  }

  // 点赞/取消点赞贴子评论
  async good(isGood, id) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const commentGood = await ctx.model.CommentGoodUser.findOne({
        where: {
          user_id: token.userID,
          comment_id: id
        }
      });
      if (isGood) {
        if (commentGood) {
          throw new Error('不可重复点赞')
        }
        await ctx.model.CommentGoodUser.create({
          id: await service.home.generateID(),
          user_id: token.userID,
          comment_id: id
        }, {
          transaction
        });
      } else {
        if (!commentGood) {
          throw new Error('系统繁忙')
        }
        await ctx.model.CommentGoodUser.destroy({
          where: {
            user_id: token.userID,
            comment_id: id
          }
        }, {
          transaction
        });
      }
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  /**
   * @description 通过评论ID获取返回值
   * @param {string} id 需要获取信息的评论ID
   * @param {boolean} isFirst 是否为顶部
   * @return {object} 返回信息
   */
  async getByCommentID(id, isFirst = false) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    const comment = await ctx.model.Comment.findOne({
      include: [
      {
        model: ctx.model.User
      }, {
        model: ctx.model.CommentGoodUser
      }],
      where: {
        id
      }
    });
    // 构建评论作者
    comment.dataValues.author = {
      id: comment.user.id,
      name: comment.user.nickname,
      introduction: comment.user.introduction,
      avatar: comment.user.avatar
    }
    // 构建评论点赞
    const commentGood = await ctx.model.CommentGoodUser.findOne({
      where: {
        user_id: token.userID,
        comment_id: id
      }
    });
    comment.dataValues.isGood = commentGood !== undefined;
    comment.dataValues.goodNumber = comment.comment_good_users.length;
    // 构建子评论
    if (isFirst) {
      const childrenComment = await ctx.model.Comment.findAll({
        where: {
          top_comment_id: id
        }
      });
      const children = [];
      for (let i = 0; i < childrenComment.length; i++) {
        const item = childrenComment[i];
        children.push(await this.getByCommentID(item.id, false))
      }
      comment.dataValues.children = children;
    } else {
      comment.dataValues.children = [];
    }
    // 如果该子评论有回复评论的情况下
    if (comment.reply_comment_id) {
      const replyComment = await ctx.model.Comment.findOne({
        include: [
        {
          model: ctx.model.User
        }],
        where: {
          id: comment.reply_comment_id
        }
      });
      comment.dataValues.replyAuthor = {
        id: replyComment.user.id,
        name: replyComment.user.nickname,
        introduction: replyComment.user.introduction,
        avatar: replyComment.user.avatar
      }
    }
    return comment;
  }

  // 创建
  async create(data = {}) {
    const { ctx, service } = this;
    const { value, postID, replyCommentID, topCommentID } = data;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      const commentInfo = await ctx.model.Comment.create({
        id: await service.home.generateID(),
        author_id: token.userID,
        content: value,
        post_id: postID,
        reply_comment_id: replyCommentID || null,
        top_comment_id: topCommentID || null
      });
      const res = await this.getByCommentID(commentInfo.id, topCommentID !== undefined);
      await transaction.commit();
      return res;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = CommentService;
