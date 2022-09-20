const express = require('express');
const bodyParser = require('body-parser');
const readJSON = require('./helpers/read');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req:1 get para pegar informações de palestrantes cadastrados
app.get('/talker', (req, res) => {
  const talkers = readJSON();
  if (!talkers) {
    res.status(HTTP_OK_STATUS).json([]);
  }
  res.status(HTTP_OK_STATUS).json(talkers);
});

// req2: get pega informações de palestrantes por id
app.get('/talker/:id', (req, res) => {
  const talkers = readJSON();
  const id = Number(req.params.id);
  const talker = talkers.find((talk) => talk.id === id);
  if (talker) {
    res.status(HTTP_OK_STATUS).json(talker);
  }
  res
    .status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
});

app.listen(PORT, () => {
  console.log('Online');
});
