'use strict';

module.exports = app => {
  const { STRING, DATE, TEXT } = app.Sequelize;

  const Case = app.model.define('case', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    title: {
      type: STRING(32),
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    introduction: {
      type: TEXT,
      allowNull: false
    },
    // 作者ID
    author_id: {
      type: STRING(32),
      allowNull: false
    },
    createTime: {
      type: DATE,
      allowNull: false
    },
    deadlineTime: {
      type: DATE,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'case',
    freezeTableName: true
  });

  Case.associate = function() {
    // 一个贴子有一个作者
    app.model.Case.belongsTo(app.model.User, { foreignKey: 'author_id' });

    // 一个案件有多个接取者，一个接取者可以接取多个用户
    app.model.Case.belongsToMany(app.model.User, {
      through: app.model.CasePickUser,
      foreignKey: 'user_id',
      otherKey: 'case_id'
    });
  };

  return Case;
};
