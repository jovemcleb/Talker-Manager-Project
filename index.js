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
    const talkers = await read();

    return res.status(200).json(talkers);
  } catch (e) {
    return res.status(404).json({ message: 'Palestrantes não encontrados' });    
  }
});

app.get('/talker/:id', async (req, res) => {
  try {
    const { id: talkerId } = req.params;
    const talker = await read();

    const talkerFinded = talker.find(({ id }) => id === Number(talkerId));

    if (!talkerFinded) throw new Error();
    console.log(talkerFinded);

    return res.status(200).json(talkerFinded);
  } catch (e) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
