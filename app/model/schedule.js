'use strict';

module.exports = app => {
  const { ENUM, STRING, INTEGER } = app.Sequelize;

  const Schedule = app.model.define('schedule', {
    id: {
      type: STRING(16),
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
    record_time: {
      type: STRING(255),
      allowNull: false
    },
    author_id: {
      type: STRING(32),
      allowNull: false
    },
    year: {
      type: INTEGER,
      allowNull: false
    },
    month: {
      type: INTEGER,
      allowNull: false
    },
    day: {
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
