const Comidas = require('../modelo/Comidas');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const ComidasController = {
    createComidas: async (req, res) => {
        try {
            const novoComidas = await Comidas.create(req.body);
            res.json(novoComidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllComidass: async (req, res) => {
        try {
            const comidass = await Comidas.findAll();
            res.json(comidass);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getComidasById: async (req, res) => {
        try {
            const comidas = await Comidas.findByPk(req.params.id);
            if (!comidas) {
                return res.status(404).send('Comidas não encontrado');
            }
            res.json(comidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateComidas: async (req, res) => {
        try {
            const comidas = await Comidas.findByPk(req.params.id);
            if (!comidas) {
                return res.status(404).send('Comidas não encontrado');
            }
            await comidas.update(req.body);
            res.send('Comidas atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteComidas: async (req, res) => {
        try {
            const comidas = await Comidas.findByPk(req.params.id);
            if (!comidas) {
                return res.status(404).send('Comidas não encontrado');
            }
            await comidas.destroy();
            res.send('Comidas deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ComidasController;