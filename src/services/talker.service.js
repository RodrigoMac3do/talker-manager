const model = require('../models');

const findAll = async () => {
  const talkers = await model.talker.findAll();

  return talkers;
};

const findById = async (id) => {
  const talker = await model.talker.findById(id);

  return talker;
};

const findByTerm = async (q) => {
  if (!q) return findAll();

  const talker = await model.talker.findByTerm(q);

  return talker;
};

const create = async (body) => {
  const talkers = await findAll();

  const talker = {
    id: talkers[talkers.length - 1].id + 1,
    ...body,
  };

  talkers.push(talker);

  model.talker.writer(talkers);

  return talkers[talkers.length - 1];
};

const update = async (body, id) => {
  const talkers = await findAll();

  const talkersUpdated = talkers.filter((talker) => talker.id !== id);

  talkersUpdated.push({ id, ...body });

  model.talker.writer(talkersUpdated);

  return findById(id);
};

const remove = async (id) => {
  await findById(id);

  const talkers = await findAll();

  const talker = talkers.filter((elem) => elem.id !== id);

  model.talker.writer(talker);
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  create,
  update,
  remove,
};
