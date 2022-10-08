const auth = require('./authorization');
const age = require('./validationAge');
const email = require('./validationEmail');
const name = require('./validationName');
const password = require('./validationPassword');
const talk = require('./validationTalk');

module.exports = {
  auth,
  age,
  email,
  name,
  password,
  talk,
};
