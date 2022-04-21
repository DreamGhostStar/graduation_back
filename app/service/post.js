const { Service } = require('egg');

class PostService extends Service {
  // 获取
  async get(id) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    const result = await ctx.model.Post.findOne({
      include: [
      {
        model: ctx.model.User
      },
      {
        model: ctx.model.PostCollectUser
      },
      {
        model: ctx.model.PostGoodUser
      },
      {
        model: ctx.model.Comment
      }],
      where: {
        id,
      }
    });
    // 构建点赞，收藏评论数量
    result.dataValues.messageNumber = result.comments.length;
    result.dataValues.goodNumber = result.post_good_users.length;
    result.dataValues.collectNumber = result.post_collect_users.length;
    // 构建访问者是否点赞，是否收藏，作者是否为自己，是否关注
    result.dataValues.isMy = result.author_id === token.userID;
    const postGoodUser = await ctx.model.PostGoodUser.findOne({
      where: {
        post_id: result.id,
        user_id: token.userID
      }
    });
    result.dataValues.isGood = postGoodUser !== undefined;
    const postCollectUser = await ctx.model.PostCollectUser.findOne({
      where: {
        post_id: result.id,
        user_id: token.userID
      }
    });
    result.dataValues.isCollect = postCollectUser !== undefined;
    const followUser = await ctx.model.UserFollow.findOne({
      where: {
        to_user_id: result.user.id,
        from_user_id: token.userID
      }
    });
    result.dataValues.isFollow = result.author_id !== token.userID && !ctx.isNull(followUser);
    // 构建作者信息
    result.dataValues.author = {
      id: result.user.id,
      name: result.user.nickname,
      introduction: result.user.introduction,
      avatar: result.user.avatar,
    };
    return result;
  }

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.Post.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  // 新增
  async create(data = {}) {
    const { ctx, service } = this;
    const token = await service.jwt.getJWtData();
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      await ctx.model.Post.create({
        ...data,
        id: await service.home.generateID(),
        author_id: token.userID
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 修改
  async update(data = {}, id) {
    const { ctx } = this;
    let transaction;
    try {
      transaction = await ctx.model.transaction();
      ctx.model.Post.update({
        ...data
      }, {
        where: {
          id,
        }
      });
      await transaction.commit();
      return '';
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // 获取list
  async getList(data) {
    const { ctx } = this;
    const { page, word } = data;
    let requestObj = {};
    const pageSize = 10;
    const res = {
      maxPage: 1,
      list: []
    };
    if (!ctx.isNull(page)) {
      // 分页查询
      requestObj = {
        offset: pageSize * (page - 1), // 查询的起始下标
        limit: pageSize // 查询的条数
      };
    } else if (word) {
      // 模糊查询
      requestObj = {
        where: {
          title: { $like: `%${word}%` }
        },
      };
    } else {
      throw new Error('服务器错误')
    }
    const posts = await ctx.model.Post.findAll(requestObj);
    const allPosts = await ctx.model.Post.findAndCountAll();
    for (let i = 0; i < posts.length; i++) {
      const postItem = posts[i];
      const info = await this.get(postItem.id);
      res.list.push(info)
    }
    res.maxPage = Math.ceil(allPosts.count / pageSize);
    return res;
  }

  // 根据ID获取list
  async getListByID(data) {
    const { ctx } = this;
    const { userID, type } = data;
    console.log('------');
    console.log(data);
    let res = [];
    if (type === 'post') {
      const posts = await ctx.model.Post.findAll({
        where: {
          author_id: userID
        }
      });
      for (let i = 0; i < posts.length; i++) {
        const item = posts[i];
        const info = await this.get(item.id);
        res.push(info)
      }
    } else if (type === 'collect') {
      const collectPosts = await ctx.model.PostCollectUser.findAll({
        where: {
          user_id: userID
        }
      });
      for (let i = 0; i < collectPosts.length; i++) {
        const item = collectPosts[i];
        const info = await this.get(item.post_id);
        res.push(info)
      }
    } else if (type === 'good') {
      const goodPosts = await ctx.model.PostGoodUser.findAll({
        where: {
          user_id: userID
        }
      });
      for (let i = 0; i < goodPosts.length; i++) {
        const item = goodPosts[i];
        const info = await this.get(item.post_id);
        res.push(info)
      }
    } else if (type === 'message') {
      const commentPosts = await ctx.model.Comment.findAll({
        where: {
          author_id: userID
        }
      });
      for (let i = 0; i < commentPosts.length; i++) {
        const item = commentPosts[i];
        const info = await this.get(item.post_id);
        res.push(info)
      }
    } else {
      throw new Error('系统繁忙')
    }

    // 去重
    const result = [];
    const map = new Map();
    for (let i = 0; i < res.length; i++) {
      const item = res[i];
      if (!map.has(item.id)) {
        result.push(item);
        map.set(item.id, true)
      }
    }

    return result;
  }
}

module.exports = PostService;
