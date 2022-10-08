const fs = require('fs');

const writerJson = (file) => fs.writeFileSync('./src/talker.json', file);

module.exports = writerJson;
