'use strict';

module.exports = app => {
  const { INTEGER, ENUM, STRING, DATE } = app.Sequelize;

  const Schedule = app.model.define('schedule', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    type: {
      type: ENUM('success', 'warning', 'error'),
      allowNull: false
    },
    content: {
      type: STRING(32),
      allowNull: false
    },
    recordTime: {
      type: DATE,
      allowNull: false
    },
    author_id: {
      type: INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'schedule',
    freezeTableName: true
  });

  Schedule.associate = function() {
    // 一个日程有一个作者
    app.model.Schedule.belongsTo(app.model.User, { foreignKey: 'author_id' });
  };

  return Schedule;
};
