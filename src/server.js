require('dotenv').config();
const app = require('./app');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.info('Ouvindo na porta', port));
