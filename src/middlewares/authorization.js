const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: 'Token não encontrado' });
  } else if (authorization.lenght < 16) {
    res.status(401).json({ message: 'Token inválido' });
  } else {
    next();
  }
};

module.exports = auth;
