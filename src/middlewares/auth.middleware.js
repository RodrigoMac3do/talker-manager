const httpException = require('../utils/http.exception');

const auth = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw httpException(401, 'Token não encontrado');

  if (authorization.length !== 16) {
    throw httpException(401, 'Token inválido');
  }

  next();
};

module.exports = auth;
