define({ "api": [
  {
    "type": "GET",
    "url": "/api/case",
    "title": "获取案件信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>案件ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "GetApiCase"
  },
  {
    "type": "POST",
    "url": "/api/case",
    "title": "新增案件",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "visit",
            "description": "<p>访问权限</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "PostApiCase"
  },
  {
    "type": "POST",
    "url": "/api/case/pick",
    "title": "用户接取案件",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "caseID",
            "description": "<p>案件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isPick",
            "description": "<p>是否接取</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "PostApiCasePick"
  },
  {
    "type": "PUT",
    "url": "/api/case",
    "title": "修改案件",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>案件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "PutApiCase"
  },
  {
    "type": "PUT",
    "url": "/api/case/entrust",
    "title": "发布者委托或取消委托用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "caseID",
            "description": "<p>案件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isEntrust",
            "description": "<p>是否委托</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "PutApiCaseEntrust"
  },
  {
    "type": "PUT",
    "url": "/api/case/list",
    "title": "获取案件列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "word",
            "description": "<p>搜索词</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "userID",
            "description": "<p>查询某用户ID的案件列表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tag",
            "description": "<p>筛选标签，为all, office</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/case.js",
    "group": "/Volumes/project/graduation/back/app/controller/case.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/case.js",
    "name": "PutApiCaseList"
  },
  {
    "type": "GET",
    "url": "/api/comment",
    "title": "根据贴子ID获取评论",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>贴子ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/comment.js",
    "group": "/Volumes/project/graduation/back/app/controller/comment.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/comment.js",
    "name": "GetApiComment"
  },
  {
    "type": "POST",
    "url": "/api/comment",
    "title": "创建评论",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postID",
            "description": "<p>贴子ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "replyCommentID",
            "description": "<p>回复的评论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/comment.js",
    "group": "/Volumes/project/graduation/back/app/controller/comment.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/comment.js",
    "name": "PostApiComment"
  },
  {
    "type": "PUT",
    "url": "/api/comment/good",
    "title": "点赞/取消点赞帖子评论",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isGood",
            "description": "<p>是否点赞</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/comment.js",
    "group": "/Volumes/project/graduation/back/app/controller/comment.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/comment.js",
    "name": "PutApiCommentGood"
  },
  {
    "type": "DELETE",
    "url": "/api/office",
    "title": "从事务所中删除用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>被删除的用户ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "DeleteApiOffice"
  },
  {
    "type": "GET",
    "url": "/api/office",
    "title": "获取事务所信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>事务所ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "GetApiOffice"
  },
  {
    "type": "GET",
    "url": "/api/office/message/join",
    "title": "获取加入消息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "officeID",
            "description": "<p>事务所ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "GetApiOfficeMessageJoin"
  },
  {
    "type": "GET",
    "url": "/api/office/search",
    "title": "搜索事务所信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "word",
            "description": "<p>搜索词</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "GetApiOfficeSearch"
  },
  {
    "type": "POST",
    "url": "/api/office/apply",
    "title": "申请进入事务所",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>事务所ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "PostApiOfficeApply"
  },
  {
    "type": "PUT",
    "url": "/api/office/join",
    "title": "同意/拒绝申请进入事务所",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/office.js",
    "group": "/Volumes/project/graduation/back/app/controller/office.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/office.js",
    "name": "PutApiOfficeJoin"
  },
  {
    "type": "GET",
    "url": "/api/post",
    "title": "获取贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>贴子id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post.js",
    "group": "/Volumes/project/graduation/back/app/controller/post.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post.js",
    "name": "GetApiPost"
  },
  {
    "type": "GET",
    "url": "/api/post/list",
    "title": "获取贴子列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "word",
            "description": "<p>搜索词</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post.js",
    "group": "/Volumes/project/graduation/back/app/controller/post.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post.js",
    "name": "GetApiPostList"
  },
  {
    "type": "GET",
    "url": "/api/user/post/list",
    "title": "根据用户ID获取贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post.js",
    "group": "/Volumes/project/graduation/back/app/controller/post.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post.js",
    "name": "GetApiUserPostList"
  },
  {
    "type": "POST",
    "url": "/api/post",
    "title": "新增贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post.js",
    "group": "/Volumes/project/graduation/back/app/controller/post.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post.js",
    "name": "PostApiPost"
  },
  {
    "type": "PUT",
    "url": "/api/post",
    "title": "修改贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>贴子ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post.js",
    "group": "/Volumes/project/graduation/back/app/controller/post.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post.js",
    "name": "PutApiPost"
  },
  {
    "type": "PUT",
    "url": "/api/post/collect",
    "title": "收藏/取消收藏贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postID",
            "description": "<p>贴子ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isCollect",
            "description": "<p>是否点赞</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post_collect_user.js",
    "group": "/Volumes/project/graduation/back/app/controller/post_collect_user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post_collect_user.js",
    "name": "PutApiPostCollect"
  },
  {
    "type": "PUT",
    "url": "/api/post/good",
    "title": "点赞/取消点赞贴子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postID",
            "description": "<p>贴子ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isGood",
            "description": "<p>是否点赞</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/post_good_user.js",
    "group": "/Volumes/project/graduation/back/app/controller/post_good_user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/post_good_user.js",
    "name": "PutApiPostGood"
  },
  {
    "type": "DELETE",
    "url": "/api/schedule",
    "title": "删除日程",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>日程ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/schedule.js",
    "group": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "name": "DeleteApiSchedule"
  },
  {
    "type": "GET",
    "url": "/api/schedule",
    "title": "获取日程列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "year",
            "description": "<p>年</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "month",
            "description": "<p>月</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/schedule.js",
    "group": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "name": "GetApiSchedule"
  },
  {
    "type": "POST",
    "url": "/api/schedule",
    "title": "增加日程",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recordTime",
            "description": "<p>提醒时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/schedule.js",
    "group": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "name": "PostApiSchedule"
  },
  {
    "type": "PUT",
    "url": "/api/schedule",
    "title": "修改日程",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>日程ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/schedule.js",
    "group": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/schedule.js",
    "name": "PutApiSchedule"
  },
  {
    "type": "GET",
    "url": "/api/user",
    "title": "获取用户信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "userID",
            "description": "<p>查找的用户id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "GetApiUser"
  },
  {
    "type": "GET",
    "url": "/api/user/follow/list",
    "title": "获取关注用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "GetApiUserFollowList"
  },
  {
    "type": "GET",
    "url": "/api/user/identity",
    "title": "修改用户事务所身份",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "identity",
            "description": "<p>身份</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "GetApiUserIdentity"
  },
  {
    "type": "POST",
    "url": "/api/user/enroll",
    "title": "注册用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verification",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PostApiUserEnroll"
  },
  {
    "type": "PUT",
    "url": "/api/user/base",
    "title": "修改用户信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介s</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PutApiUserBase"
  },
  {
    "type": "PUT",
    "url": "/api/user/enroll",
    "title": "用户登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PutApiUserEnroll"
  },
  {
    "type": "PUT",
    "url": "/api/user/follow",
    "title": "关注/取消关注用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isFollow",
            "description": "<p>是否关注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PutApiUserFollow"
  },
  {
    "type": "PUT",
    "url": "/api/user/lawyer",
    "title": "修改用户律师信息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "officeID",
            "description": "<p>事务所ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>职业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>被修改的用户ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PutApiUserLawyer"
  },
  {
    "type": "PUT",
    "url": "/api/user/password",
    "title": "重置密码",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "beforePassword",
            "description": "<p>之前的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "afterPassword",
            "description": "<p>更新后的密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "group": "/Volumes/project/graduation/back/app/controller/user.js",
    "groupTitle": "/Volumes/project/graduation/back/app/controller/user.js",
    "name": "PutApiUserPassword"
  }
] });
