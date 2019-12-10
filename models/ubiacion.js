'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ubiacion = sequelize.define('Ubiacion', {
    nombre: DataTypes.STRING
  }, {});
  Ubiacion.associate = function(models) {
    // associations can be defined here
  };
  return Ubiacion;
};