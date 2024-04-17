const express = require('express');
const app = express();
const estoque = require('./util/estoque');

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const resultado = estoque.adicionar(parseFloat(req.params.id), req.params.nome, parseFloat(req.params.qtd));
    res.send(resultado.toString());
});

app.get('/listar', (req, res) => {
    const produtos = estoque.listar();
    res.send(produtos);
});

app.get('/remover/:id', (req, res) => {
    const resultado = estoque.remover(parseFloat(req.params.id));
    res.send(resultado.toString());
});

app.get('/editar/:id/:qtd', (req, res) => {
    const resultado = estoque.editar(parseFloat(req.params.id), parseFloat(req.params.qtd));
    res.send(resultado.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});