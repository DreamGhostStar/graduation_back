'use strict';

// 加入事务所消息
module.exports = app => {
  const { ENUM, STRING } = app.Sequelize;

  const Message = app.model.define('message', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    office_id: {
      type: STRING(32),
      allowNull: false
    },
    user_id: {
      type: STRING(32),
      allowNull: false
    },
    status: {
      type: ENUM('pending', 'agree', 'refuse'),
      allowNull: false,
      defaultValue: 'pending'
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
