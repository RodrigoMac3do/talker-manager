const readerJson = require('../utils/read');

const listAll = () => readerJson();

const findById = (id) => {
  const talkers = readerJson();
  return talkers.find((talk) => talk.id === id);
};

module.exports = {
  listAll,
  findById,
};
