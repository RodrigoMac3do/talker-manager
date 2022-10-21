const service = require('../services');

const listAll = async (_req, res, _next) => {
  const talkers = await service.talker.listAll();

  res.status(200).json(talkers);
};

const findById = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const talker = await service.talker.findById(id);
    res.status(200).json(talker);
  } catch (error) {
    next(error);
  }
};

const findByName = async (req, res, next) => {
  const { q } = req.query;

  try {
    const talker = await service.talker.findByName(q);
    res.status(200).json(talker);
  } catch (error) {
    next(error);
  }
};

const insert = async (req, res, next) => {
  try {
    const talkers = await service.talker.listAll();
    const talker = {
      id: talkers.length + 1,
      ...req.body,
    };

    talkers.push(talker);

    await service.talker.insert(talkers);

    res.status(201).json(talker);
  } catch (error) {
    next(error);
  }
};

const insertId = async (_req, _res, _next) => {};

module.exports = {
  listAll,
  findById,
  findByName,
  insert,
  insertId,
};
