const statusCode = {
  CREATED: 201,
  SUCCESSFUL: 200,
  BAD_REQUEST: 400,
  ACCESS_DENIED: 401,
  UNPROCESSABLE: 422,
};

const mapStatusCode = (errorMessage) => {
  if (
    errorMessage.includes('obrigatório')
    || errorMessage.includes('deve ter')
    || errorMessage.includes('maior de idade')
    || errorMessage.includes('de 1 à 5')
  ) {
    return statusCode.BAD_REQUEST;
  }

  return statusCode.ACCESS_DENIED;
};

module.exports = {
  statusCode,
  mapStatusCode,
};
