const filmes = require('../models/filmeModel');


const listarFilmes = () => filmes;

const adicionarFilme = (titulo, ano, descricao, foto) => {
    const id = filmes.length ? filmes[filmes.length - 1].id + 1 : 1;
    const novoFilme = { id, titulo, ano, descricao, foto };
    filmes.push(novoFilme);
    return novoFilme;
};

const editarFilme = (id, titulo, ano, descricao, foto) => {
    const filmeIndex = filmes.findIndex(f => f.id === parseInt(id));
    if (filmeIndex === -1) {
        return null;
    }
    filmes[filmeIndex] = { id: parseInt(id), titulo, ano, descricao, foto };
    return filmes[filmeIndex];
};

const deletarFilme = (id) => {
    const filmeIndex = filmes.findIndex(f => f.id === parseInt(id));
    if (filmeIndex === -1) {
        return null;
    }
    const filmeRemovido = filmes.splice(filmeIndex, 1);
    return filmeRemovido[0];
};

module.exports = {
    listarFilmes,
    adicionarFilme,
    editarFilme,
    deletarFilme
};

