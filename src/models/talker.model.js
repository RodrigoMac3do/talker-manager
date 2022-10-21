const readerJson = require('../utils/read');
const writerJson = require('../utils/write');

const listAll = () => {
  const talkers = readerJson();

  return talkers;
};

const findById = (id) => {
  const talkers = readerJson();

  const talker = talkers.find((talk) => talk.id === id);

  return talker;
};

const findByName = (q) => {
  const talkers = readerJson();

  const talker = talkers.filter((talk) => talk.name.includes(q));

  return talker;
};

const insert = (file) => {
  const talker = writerJson(file);
  
  return talker;
};

module.exports = {
  listAll,
  findById,
  insert,
  findByName,
};
