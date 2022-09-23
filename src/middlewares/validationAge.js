const HTTP_BAD_REQUEST_STATUS = 400;

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "age" é obrigatório',
    });
  } else if (age < 18) {
    res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  } else {
    next();
  }
};

module.exports = validateAge;
