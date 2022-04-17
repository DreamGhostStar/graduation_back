define({ "api": [
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
