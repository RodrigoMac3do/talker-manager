const model = require('../models');
const sendError = require('../helpers/error');

const listAll = async () => {
  const talkers = await model.talker.listAll();

  if (!talkers) throw sendError(200, []);

  return talkers;
};

const findById = async (id) => {
  const talker = await model.talker.findById(id);

  if (!talker) throw sendError(404, 'Pessoa palestrante não encontrada');

  return talker;
};

const findByName = async (q) => {
  const talker = await model.talker.findByName(q);
  const talkers = await model.talker.listAll();

  if (!q) return talkers;

  if (!talker) throw sendError(200, []);

  return talker;
};

const insert = async (talker) => {
  const result = await model.talker.insert(talker);

  return result;
};

module.exports = {
  listAll,
  findById,
  findByName,
  insert,
};
