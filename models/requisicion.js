'use strict';
module.exports = (sequelize, DataTypes) => {
  const Requisicion = sequelize.define('Requisicion', {
    estado: DataTypes.STRING,
    fecha: DataTypes.STRING
  }, {});
  Requisicion.associate = function(models) {
    // associations can be defined here
  };
  return Requisicion;
};