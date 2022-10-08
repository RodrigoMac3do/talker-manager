const service = require('../services');

const listAll = async (_req, res, _next) => {
  const talkers = await service.talker.listAll();
  res.status(200).json(talkers);
};

module.exports = {
  listAll,
};
