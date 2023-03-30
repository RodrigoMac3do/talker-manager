const model = require('../models');
const httpException = require('../utils/http.exception');

const findAll = async () => {
  const talkers = await model.talker.findAll();

  return talkers;
};

const findById = async (id) => {
  const talker = await model.talker.findById(id);

  return talker;
};

const findByName = async (q) => {
  const talker = await model.talker.findByName(q);
  const talkers = await model.talker.findAll();

  if (!q) return talkers;

  if (!talker) throw httpException(200, []);

  return talker;
};

const create = async (body) => {
  const talkers = await findAll();

  const talker = {
    id: talkers[talkers.length - 1].id + 1,
    ...body,
  };

  talkers.push(talker);

  await model.talker.create(talkers);

  return talkers[talkers.length - 1];
};

module.exports = {
  findAll,
  findById,
  findByName,
  create,
};
