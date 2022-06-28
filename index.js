const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const talkerRouter = require('./src/routers/talker');
const loginRouter = require('./src/routers/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(helmet());
app.use(morgan('common'));

app.use('/talker', rescue(talkerRouter));

app.use('/login', rescue(loginRouter));

app.listen(PORT, () => {
  console.log('Online');
});
