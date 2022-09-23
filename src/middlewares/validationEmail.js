const HTTP_BAD_REQUEST_STATUS = 400;

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (!email) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  } else if (!valid) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } else {
    next();
  }
};

module.exports = validateEmail;
