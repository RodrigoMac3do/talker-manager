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

  await model.talker.writer(talkers);

  return talkers[talkers.length - 1];
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
  findByName,
  create,
  remove,
};

// console.log(
//   'antes splice',
//   talkers.filter((e) => e.id !== talker.id),
// );

// const index = talkers.indexOf(talker);

// console.log(index);

// talkers.splice(index, 1);

// console.log('depois splice', talkers);
