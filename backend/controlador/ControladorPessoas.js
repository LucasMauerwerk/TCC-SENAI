const Pessoas = require('../modelo/pessoas');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const PessoasController = {
    createPessoas: async (req, res) => {
        try {
            const novoPessoas = await Pessoas.create(req.body);
            res.json(novoPessoas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllPessoas: async (req, res) => {
        try {
            const pessoas = await Pessoas.findAll();
            res.json(pessoas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getPessoasById: async (req, res) => {
        try {
            const pessoas = await Pessoas.findByPk(req.params.id);
            if (!pessoas) {
                return res.status(404).send('Pessoas não encontrado');
            }
            res.json(pessoas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updatePessoas: async (req, res) => {
        try {
            const pessoas = await Pessoas.findByPk(req.params.id);
            if (!pessoas) {
                return res.status(404).send('Pessoas não encontrado');
            }
            await Pessoas.update(req.body);
            res.send('Pessoas atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deletePessoas: async (req, res) => {
        try {
            const pessoas = await Pessoas.findByPk(req.params.id);
            if (!pessoas) {
                return res.status(404).send('Pessoas não encontrado');
            }
            await pessoas.destroy();
            res.send('Pessoas deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = PessoasController;