const model = require('../models');
const sendError = require('../helpers/error');

const listAll = async () => {
  const talkers = await model.talker.listAll();
  if (!talkers) {
    throw sendError(200, []);
    // return res.status(HTTP_OK_STATUS).send([]);
  }
  // if (talkers) {
  // throw sendError(200, talkers);
  // return res.status(HTTP_OK_STATUS).json(talkers);
  // }
  return talkers;
};

const findById = async (id) => {
  const talker = await model.talker.findById(id);
  if (talker) return talker;
  throw sendError(404, 'Pessoa palestrante não encontrada');
};

module.exports = {
  listAll,
  findById,
};
