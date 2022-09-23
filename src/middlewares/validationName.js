const HTTP_BAD_REQUEST_STATUS = 400;

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "name" é obrigatório' });
  } else if (name.length < 3) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  } else {
    next();
  }
};

module.exports = validateName;
