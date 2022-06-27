const { read } = require('../helpers/writeAndReadFile');
const { OK, NOT_FOUND } = require('../helpers/httpStatusCode');

const getAll = async (req, res) => {
  try {
    const talkers = await read();

    return res.status(OK).json(talkers);
  } catch (e) {
    return res.status(NOT_FOUND).json({ message: 'Palestrantes não encontrados' });
  }
};

const getById = async (req, res) => {
  try {
    const { id: talkerId } = req.params;
    const talker = await read();

    const talkerFinded = talker.find(({ id }) => id === Number(talkerId));

    if (!talkerFinded) throw new Error();
    console.log(talkerFinded);

    return res.status(OK).json(talkerFinded);
  } catch (e) {
    return res
      .status(NOT_FOUND)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
};

module.exports = {
  getAll,
  getById,
};