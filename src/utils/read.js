const fs = require('fs');

const readerJson = () => {
  const data = fs.readFileSync('./src/talker.json', 'utf-8');

  return JSON.parse(data);
};

module.exports = readerJson;
