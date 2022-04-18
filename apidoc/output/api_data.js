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
