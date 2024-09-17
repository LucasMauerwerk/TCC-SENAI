const express = require('express');
const router = express.Router();
const ProdutoController = require('../controlador/ControladorComidas');

// Rota para criar um novo produto
router.post('/comidas', ProdutoController.createComidas);

// Rota para obter todos os produtos
router.get('/comidas', ProdutoController.getAllComidass);

// Rota para obter um produto pelo ID
router.get('/comidas/:id', ProdutoController.getComidasById);

// Rota para atualizar um produto
router.put('/comidas/:id', ProdutoController.updateComidas);

// Rota para deletar um produto
router.delete('/comidas/:id', ProdutoController.deleteComidas);

// Rota para registrar entrada de estoque
//router.post('/comidas/:id/entrada', ProdutoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/comidas/:id/saida', ProdutoController.registrarSaida);

module.exports = router;