const express = require('express');
const router = express.Router();
const ProdutoController = require('../controlador/ControladorPedidos');

// Rota para criar um novo produto
router.post('/pedidos', ProdutoController.createPedidos);

// Rota para obter todos os pedidos
router.get('/pedidos', ProdutoController.getAllPedidoss);

// Rota para obter um produto pelo ID
router.get('/pedidos/:id', ProdutoController.getPedidosById);

// Rota para atualizar um produto
router.put('/pedidos/:id', ProdutoController.updatePedidos);

// Rota para deletar um produto
router.delete('/pedidos/:id', ProdutoController.deletePedidos);

// Rota para registrar entrada de estoque
//router.post('/produtos/:id/entrada', ProdutoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/produtos/:id/saida', ProdutoController.registrarSaida);

module.exports = router;