'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Office = app.model.define('office', {
    id: {
      type: INTEGER,
      primaryKey: true
    //   autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'office_user',
    freezeTableName: true
  });

  Office.associate = function() {

  };

  return Office;
};
