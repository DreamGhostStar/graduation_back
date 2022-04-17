'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Office = app.model.define('office', {
    id: {
      type: STRING(16),
      primaryKey: true
    //   autoIncrement: true
    },
    value: {
      type: STRING(32),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'office',
    freezeTableName: true
  });

  Office.associate = function() {};

  return Office;
};
