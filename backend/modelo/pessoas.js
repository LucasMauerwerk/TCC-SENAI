const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class pessoas extends Model {}

pessoas.init({
    idlogin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45)
    },
    whatsapp: {
        type: DataTypes.STRING(45)
    },
    endereco: {
        type: DataTypes.STRING(255)
    },
    senha: {
        type: DataTypes.STRING(45)
    }
}, {
    sequelize,
    modelName: 'pessoas', // tem que ser exatamente igual o nome da tabela
    timestamps: false
});

module.exports = pessoas;