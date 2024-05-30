const express = require('express');
const app = express();
const path = require('path');
const rotasCalculadora = require('./src/rotas/rotasCalculadora');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src/visoes')));
app.use('/', rotasCalculadora);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor está rodando em http://localhost:${PORTA}`);
});
