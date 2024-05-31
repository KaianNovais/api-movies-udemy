const express = require('express');
const router = express.Router();

const filmesController = require('../controllers/filmesController');

// Rota para listar filmes
router.get('/', filmesController.listarFilmes);

// Rota para adicionar um filme
router.post('/', filmesController.adicionarFilme);

// Rota para editar um filme
router.put('/:id', filmesController.editarFilme);

// Rota para deletar um filme
router.delete('/:id', filmesController.deletarFilme);

module.exports = router;