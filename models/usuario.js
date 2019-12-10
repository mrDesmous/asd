'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombreUsuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    estdo: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};