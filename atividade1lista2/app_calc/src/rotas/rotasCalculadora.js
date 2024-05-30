const express = require('express');
const roteador = express.Router();
const controladorCalculadora = require('../controlador/controladorCalculadora');

roteador.post('/calcular', controladorCalculadora.calcular);

module.exports = roteador;
