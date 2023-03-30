const { nanoid } = require('nanoid');

const signIn = (body) => {
  let token = body;

  token = nanoid(16);

  return token;
};

module.exports = { signIn };
