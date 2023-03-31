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
  const talker = await findById(id);

  const array = [];

  array.push(talker);

  const index = talkers.indexOf(array);

  const updated = { id, ...body };

  talkers.splice(index, 1, updated);

  model.talker.writer(talkers);

  return updated;
};

const remove = async (id) => {
  const talker = await findById(id);

  const talkers = await findAll();

  const a = talkers.filter((e) => e.id !== talker.id);

  await model.talker.writer(a);
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  create,
  update,
  remove,
};
