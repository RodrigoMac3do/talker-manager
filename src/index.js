const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');
const readJSON = require('./helpers/read');
const validateEmail = require('./middlewares/validationEmail');
const validatePassword = require('./middlewares/validationPassword');
const auth = require('./middlewares/authorization');
const validateName = require('./middlewares/validationName');
const validateAge = require('./middlewares/validationAge');
const validateTalk = require('./middlewares/validationTalk');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_NO_CONTENT_STATUS = 204;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req 1: get para pegar informações de palestrantes cadastrados
app.get('/talker', async (_req, res) => {
  const talkers = await readJSON();
  if (!talkers) {
    return res.status(HTTP_OK_STATUS).send([]);
  }
  if (talkers) {
    return res.status(HTTP_OK_STATUS).json(talkers);
  }
});

// req 8: get com search
app.get('/talker/search', auth, async (req, res) => {
  const { q } = req.query;
  const talkers = await readJSON();
  if (!q) {
    res.status(HTTP_OK_STATUS).json(talkers);
  }
  const talker = talkers.filter((talk) => talk.name.includes(q));
  console.log(talker);
  if (!talker) {
    res.status(HTTP_OK_STATUS).json([]);
  } else {
    res.status(HTTP_OK_STATUS).json(talker);
  }
});

// req 2: get pega informações de palestrantes por id
app.get('/talker/:id', async (req, res) => {
  const id = Number(req.params.id);
  const talkers = await readJSON();
  const talker = await talkers.find((talk) => talk.id === id);
  if (talker) {
    return res.status(HTTP_OK_STATUS).json(talker);
  }
  return res
    .status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
});

// req 3 e 4: post para login e middlewares de validação
app.post('/login', validateEmail, validatePassword, (_req, res) => {
  let login = { email: 'email@email.com', password: '123456' };
  login = nanoid(16);
  res.status(HTTP_OK_STATUS).json({ token: login });
});

// req 5: post para talker
app.post(
  '/talker',
  auth,
  validateName,
  validateAge,
  validateTalk,
  async (req, res) => {
    const talkers = await readJSON();
    const talker = {
      id: talkers.length + 1,
      ...req.body,
    };
    talkers.push(talker);
    fs.writeFileSync('./src/talker.json', JSON.stringify(talkers));
    res.status(HTTP_CREATED_STATUS).json(talker);
  },
);

// req 7: delete para apagar palestrante por id
app.delete('/talker/:id', auth, async (req, res) => {
  const id = Number(req.params.id);
  const talkers = await readJSON();
  const talker = talkers.find((talk) => talk.id === id);
  if (talker) {
    const index = talkers.indexOf(talker);
    talkers.splice(index, 1);
    fs.writeFileSync('./src/talker.json', JSON.stringify(talkers));
  }
  res.sendStatus(HTTP_NO_CONTENT_STATUS);
});

app.listen(PORT, () => {
  console.log('Online');
});
