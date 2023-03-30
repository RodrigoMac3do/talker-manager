const service = require('../services');
const { loginSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const signIn = async (req, res) => {
  const { body } = req;

  await validateSchema(loginSchema, body);

  const token = service.login.signIn(body);

  res.status(200).json({ token });
};

module.exports = {
  signIn,
};
