const Bebidas = require('../modelo/Bebidas');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../modelo/SaidaEstoque');

const BebidasController = {
    createBebidas: async (req, res) => {
        try {
            const novoBebidas = await Bebidas.create(req.body);
            res.json(novoBebidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllBebidass: async (req, res) => {
        try {
            const Bebidass = await Bebidas.findAll();
            res.json(bebidass);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getBebidasById: async (req, res) => {
        try {
            const bebidas = await Bebidas.findByPk(req.params.id);
            if (!bebidas) {
                return res.status(404).send('Bebidas não encontrado');
            }
            res.json(bebidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateBebidas: async (req, res) => {
        try {
            const bebidas = await Bebidas.findByPk(req.params.id);
            if (!bebidas) {
                return res.status(404).send('Bebidas não encontrado');
            }
            await bebidas.update(req.body);
            res.send('Bebidas atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteBebidas: async (req, res) => {
        try {
            const bebidas = await Bebidas.findByPk(req.params.id);
            if (!bebidas) {
                return res.status(404).send('Bebidas não encontrado');
            }
            await bebidas.destroy();
            res.send('Bebidas deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = BebidasController;