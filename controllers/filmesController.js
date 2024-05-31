const filmesService = require('../services/filmesServices');

const listarFilmes = (req, res) => {
    try {
        const filmes = filmesService.listarFilmes();
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ msg: "Erro ao listar filmes" });
    }
};

const adicionarFilme = (req, res) => {
    try {
        const { titulo, ano, descricao, foto } = req.body;
        const novoFilme = filmesService.adicionarFilme(titulo, ano, descricao, foto);
        res.status(201).json(novoFilme);
    } catch (error) {
        res.status(500).json({ msg: "Erro ao inserir o filme" });
    }
};

const editarFilme = (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, ano, descricao, foto } = req.body;
        const filmeEditado = filmesService.editarFilme(id, titulo, ano, descricao, foto);
        if (filmeEditado) {
            res.json(filmeEditado);
        } else {
            res.status(404).json({ msg: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Erro ao editar o filme" });
    }
};

const deletarFilme = (req, res) => {
    try {
        const { id } = req.params;
        const filmeRemovido = filmesService.deletarFilme(id);
        if (filmeRemovido) {
            res.json(filmeRemovido);
        } else {
            res.status(404).json({ msg: "Filme não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Erro ao deletar o filme" });
    }
};

module.exports = {
    listarFilmes,
    adicionarFilme,
    editarFilme,
    deletarFilme
};