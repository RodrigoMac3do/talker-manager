const express = require('express');
require('express-async-errors');
const Routes = require('./routes/router');
const { httpErrorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(Routes);

app.use(httpErrorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;
