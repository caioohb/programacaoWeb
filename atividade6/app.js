const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080; 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
