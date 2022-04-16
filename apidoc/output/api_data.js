define({ "api": [
  {
    "type": "POST",
    "url": "/api/user/enroll",
    "title": "获取通知消息详情",
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
  }
] });
