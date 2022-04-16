'use strict';

// 加入事务所消息
module.exports = app => {
  const { INTEGER, ENUM } = app.Sequelize;

  const Message = app.model.define('message', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    office_id: {
      type: INTEGER,
      allowNull: false
    },
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    status: {
      type: ENUM('pending', 'success', 'refuse'),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'message',
    freezeTableName: true
  });

  Message.associate = function() {
    // 一对一，一个消息有一个事务所
    app.model.Message.belongsTo(app.model.Office, { foreignKey: 'office_id' });

    // 一对一，一个消息有一个加入者
    app.model.Message.belongsTo(app.model.User, { foreignKey: 'user_id' });
  };

  return Message;
};
