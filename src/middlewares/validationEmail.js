const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (!email) {
    res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } else if (!valid) {
    res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } else {
    next();
  }
};

module.exports = validateEmail;
