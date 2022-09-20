const fs = require('fs');

const readJSON = () => {
  const data = fs.readFileSync('./src/talker.json', 'utf8');
  return JSON.parse(data);
};

module.exports = readJSON;
