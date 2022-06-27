const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const talkerRouter = require('./src/routers/talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', rescue(talkerRouter));

app.listen(PORT, () => {
  console.log('Online');
});
