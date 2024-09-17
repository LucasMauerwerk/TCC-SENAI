const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class pedidos extends Model {}

pedidos.init({
    idpedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    data: {
        type: DataTypes.DATE
    },
    pago: {
        type: DataTypes.TINYINT
    },
    
}, {
    sequelize,
    modelName: 'pedidos', // tem que ser exatamente igual o nome da tabela
    timestamps: false
});

module.exports = pedidos;