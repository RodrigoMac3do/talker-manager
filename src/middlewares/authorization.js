const HTTP_UNAUTHORIZED_STATUS = 401;

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res
      .status(HTTP_UNAUTHORIZED_STATUS)
      .json({ message: 'Token não encontrado' });
  } else if (authorization.length < 16) {
    res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  } else {
    next();
  }
};

module.exports = auth;
