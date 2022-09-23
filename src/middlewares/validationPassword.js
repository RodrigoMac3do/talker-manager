const HTTP_BAD_REQUEST_STATUS = 400;

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const valid = /^[0-9a-zA-Z]{6,}$/.test(password);
  if (!password) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  } else if (!valid) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  } else {
    next();
  }
};

module.exports = validatePassword;
