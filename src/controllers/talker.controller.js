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

const findByTerm = async (req, res) => {
  const { q } = req.query;

  const talker = await service.talker.findByTerm(q);

  res.status(200).json(talker);
};

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(talkerSchema, body);

  const talker = await service.talker.create(body);

  res.status(201).json(talker);
};

const update = async (req, res) => {
  const { body } = req;
  const id = Number(req.params.id);

  await validateSchema(talkerSchema, body);

  const talkerUpdated = await service.talker.update(body, id);

  res.status(200).json(talkerUpdated);
};

const remove = async (req, res) => {
  const id = Number(req.params.id);

  await service.talker.remove(id);

  res.sendStatus(204);
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  create,
  update,
  remove,
};
