const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const { read } = require('./src/helpers/index');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  try {
    const talker = await read();

    console.log(talker);

    return res.status(200).json(talker);
  } catch (e) {
    return res.status(404).json({ message: 'Palestrantes não encontrados' });    
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
