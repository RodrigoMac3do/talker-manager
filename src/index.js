const express = require('express');
const bodyParser = require('body-parser');
const readJSON = require('./helpers/read');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req:1 get para pegar informações de palestrantes cadastrados
app.get('/talker', (req, res) => {
  const data = readJSON();
  if (!data) {
    res.status(200).json([]);
  }
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log('Online');
});
