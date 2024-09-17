const Pedidos = require('../modelo/Pedidos');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../modelo/SaidaEstoque');

const PedidosController = {
    createPedidos: async (req, res) => {
        try {
            const novoPedidos = await Pedidos.create(req.body);
            res.json(novoPedidos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllPedidoss: async (req, res) => {
        try {
            const pedidoss = await Pedidos.findAll();
            res.json(pedidoss);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getPedidosById: async (req, res) => {
        try {
            const pedidos = await Pedidos.findByPk(req.params.id);
            if (!pedidos) {
                return res.status(404).send('Pedidos não encontrado');
            }
            res.json(pedidos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updatePedidos: async (req, res) => {
        try {
            const pedidos = await Pedidos.findByPk(req.params.id);
            if (!pedidos) {
                return res.status(404).send('Pedidos não encontrado');
            }
            await pedidos.update(req.body);
            res.send('Pedidos atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deletePedidos: async (req, res) => {
        try {
            const pedidos = await Pedidos.findByPk(req.params.id);
            if (!pedidos) {
                return res.status(404).send('Pedidos não encontrado');
            }
            await pedidos.destroy();
            res.send('Pedidos deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = PedidosController;