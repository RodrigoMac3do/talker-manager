const { nanoid } = require('nanoid');

const token = (req, res) => {
  const { email, password } = req.body;

  let inputs = { email, password };

  inputs = nanoid(16);
  
  return res.status(200).json({ token: inputs });
};

module.exports = {
  token,
};
