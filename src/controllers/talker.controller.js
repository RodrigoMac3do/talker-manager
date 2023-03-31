const service = require('../services');
const { talkerSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const findAll = async (_req, res) => {
  const talkers = await service.talker.findAll();

  res.status(200).json(talkers);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);

  const talker = await service.talker.findById(id);

  res.status(200).json(talker);
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

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(talkerSchema, body);

  const talker = await service.talker.create(body);

  res.status(201).json(talker);
};

const remove = async (req, res) => {
  const id = Number(req.params.id);

  await service.talker.remove(id);

  res.sendStatus(204);
};

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  remove,
};
