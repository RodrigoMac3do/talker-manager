const httpException = require('../utils/http.exception');
const readerJson = require('../utils/read');
const writerJson = require('../utils/write');

const findAll = async () => {
  const talkers = await readerJson();

  return talkers;
};

const findById = async (id) => {
  const talkers = await findAll();

  const talker = talkers.find((talk) => talk.id === id);

  if (!talker) throw httpException(404, 'Pessoa palestrante não encontrada');

  return talker;
};

const findByTerm = async (q) => {
  const talkers = await findAll();

  const talker = talkers.filter((talk) => talk.name.includes(q));

  return talker;
};

const writer = (file) => {
  const talker = writerJson(file);

  return talker;
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  writer,
};
