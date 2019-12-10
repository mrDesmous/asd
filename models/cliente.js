'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};