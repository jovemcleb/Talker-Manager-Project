const talkerService = require('../services/talkerServices');
const { OK, NOT_FOUND, INTERNAL_SERVER } = require('../helpers/httpStatusCode');

const getAll = async (req, res) => {
  try {
    const talkers = await talkerService.getAll();

    if (!talkers || talkers.length === 0) {
      return res.status(OK).json([]);
    }

    return res.status(OK).json(talkers);
  } catch (e) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

const getById = async (req, res) => {
  try {
    const { id: talkerId } = req.params;
    const talker = await talkerService.getById(talkerId);

    if (!talker || talker.length === 0) {
      return res
      .status(NOT_FOUND)
      .json({ message: 'Pessoa palestrante não encontrada' });
    }

    return res.status(OK).json(talker);
  } catch (e) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

module.exports = {
  getAll,
  getById,
};