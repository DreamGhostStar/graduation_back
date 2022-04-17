'use strict';

module.exports = app => {
  const { BOOLEAN, STRING } = app.Sequelize;

  const CasePickUser = app.model.define('case_pick_user', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: STRING(32),
      allowNull: false
    },
    case_id: {
      type: STRING(32),
      allowNull: false
    },
    is_pick: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    timestamps: false,
    tableName: 'case_pick_user',
    freezeTableName: true
  });

  CasePickUser.associate = function() {};

  return CasePickUser;
};
