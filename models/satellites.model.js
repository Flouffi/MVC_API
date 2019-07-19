'use strict';
module.exports = (sequelize, DataTypes) => {
  const satellites = sequelize.define('satellites', {
    nom: DataTypes.STRING,
    distance: DataTypes.FLOAT,
    photo: DataTypes.STRING,
    diametre: DataTypes.FLOAT,
    temperature: DataTypes.FLOAT,
    masse: DataTypes.FLOAT,
    revolution: DataTypes.FLOAT
  }, {});
  satellites.associate = function(models) {
    // associations can be defined here
  };
  return satellites;
};