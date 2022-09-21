const express = require('express');
const { nanoid } = require('nanoid');
const bodyParser = require('body-parser');
const readJSON = require('./helpers/read');
const validateEmail = require('./middlewares/validationEmail');
const validatePassword = require('./middlewares/validationPassword');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_NO_CONTENT_STATUS = 204;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req 1: get para pegar informações de palestrantes cadastrados
app.get('/talker', (req, res) => {
  const talkers = readJSON();
  if (!talkers) {
    res.status(HTTP_OK_STATUS).json([]);
  }
  res.status(HTTP_OK_STATUS).json(talkers);
});

// req 2: get pega informações de palestrantes por id
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

// req 3 e 4: post para login e middlewares de validação
app.post('/login', validateEmail, validatePassword, (req, res) => {
  let login = { email: 'email@email.com', password: '123456' };
  login = nanoid(16);
  res.status(HTTP_OK_STATUS).json({ token: login });
});

// req 7: delete para apagar palestrante por id
app.delete('/talker/:id', (req, res) => {
  const talkers = readJSON();
  const id = Number(req.params.id);
  const talker = talkers.find((talk) => talk.id === id);
  if (talker) {
    const index = talkers.indexOf(talker);
    talkers.splice(index, 1);
  }
  res.sendStatus(HTTP_NO_CONTENT_STATUS);
});

app.listen(PORT, () => {
  console.log('Online');
});
