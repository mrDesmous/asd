'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    fecha: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {});
  Pedido.associate = function(models) {
    // associations can be defined here
  };
  return Pedido;
};