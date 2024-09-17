const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class bebidas extends Model {}

bebidas.init({
    idbebidas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING(45)
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    quantidade: {
        type: DataTypes.DECIMAL
    },
}, {
    sequelize,
    modelName: 'bebidas', // tem que ser exatamente igual o nome da tabela
    timestamps: false
});

module.exports = bebidas;