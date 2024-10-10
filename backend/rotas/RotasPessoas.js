const express = require('express');
const router = express.Router();
const ProdutoController = require('../controlador/ControladorPessoas');

// Rota para criar um novo produto
router.post('/pessoas', ProdutoController.createPessoas);

// Rota para obter todos os Pessoas
router.get('/pessoas', ProdutoController.getAllPessoas);

// Rota para obter um produto pelo ID
router.get('/pessoas/:id', ProdutoController.getPessoasById);

// Rota para atualizar um produto
router.put('/pessoas/:id', ProdutoController.updatePessoas);

// Rota para deletar um produto
router.delete('/pessoas/:id', ProdutoController.deletePessoas);

// Rota para deletar um produto
router.post('/login', ProdutoController.login);

// Rota para registrar entrada de estoque
//router.post('/Pessoas/:id/entrada', ProdutoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/Pessoas/:id/saida', ProdutoController.registrarSaida);

module.exports = router;