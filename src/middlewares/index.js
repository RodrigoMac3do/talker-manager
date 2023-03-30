const auth = require('./auth.middleware');
const httpErrorMiddleware = require('./http.error.middleware');

module.exports = {
  auth,
  httpErrorMiddleware,
};
