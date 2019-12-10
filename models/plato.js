'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plato = sequelize.define('Plato', {
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING,
    tiempoestimado: DataTypes.STRING
  }, {});
  Plato.associate = function(models) {
    // associations can be defined here
  };
  return Plato;
};