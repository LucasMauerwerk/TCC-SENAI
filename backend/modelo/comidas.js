const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class comidas extends Model {}

comidas.init({
    idcomida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.TEXT
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    descricao: {
        type: DataTypes.TEXT
    },
    peso: {
        type: DataTypes.STRING(45)
    }
}, {
    sequelize,
    modelName: 'comidas', // tem que ser exatamente igual o nome da tabela
    timestamps: false
});

module.exports = comidas;