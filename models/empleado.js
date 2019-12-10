'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Empleado.associate = function(models) {
    // associations can be defined here
  };
  return Empleado;
};