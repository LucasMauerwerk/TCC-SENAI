const express = require('express');
const router = express.Router();
const ProdutoController = require('../controlador/ControladorBebidas');

// Rota para criar um novo produto
router.post('/bebidas', ProdutoController.createBebidas);

// Rota para obter todos os produtos
router.get('/bebidas', ProdutoController.getAllBebidass);

// Rota para obter um produto pelo ID
router.get('/bebidas/:id', ProdutoController.getBebidasById);

// Rota para atualizar um produto
router.put('/bebidas/:id', ProdutoController.updateBebidas);

// Rota para deletar um produto
router.delete('/bebidas/:id', ProdutoController.deleteBebidas);

// Rota para registrar entrada de estoque
//router.post('/produtos/:id/entrada', ProdutoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/produtos/:id/saida', ProdutoController.registrarSaida);

module.exports = router;