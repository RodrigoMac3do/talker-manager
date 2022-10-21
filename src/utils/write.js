const fs = require('fs');

const writerJson = (file) => fs.writeFileSync('./src/talker.json', JSON.stringify(file));

module.exports = writerJson;
