'use strict';

module.exports = app => {
  const { INTEGER, BOOLEAN } = app.Sequelize;

  const CasePickUser = app.model.define('case_pick_user', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    case_id: {
      type: INTEGER,
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
