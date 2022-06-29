const talkerService = require('../services/talkerServices');
const { 
  OK, NOT_FOUND, INTERNAL_SERVER, CREATED, NO_CONTENT, 
} = require('../helpers/httpStatusCode');

const getAll = async (req, res) => {
  try {
    const talkers = await talkerService.getAll();

    if (!talkers || talkers.length === 0) {
      return res.status(OK).json([]);
    }

    return res.status(OK).json(talkers);
  } catch (e) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar tarefa' });
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

const add = async (req, res) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const addTalker = await talkerService.add(name, age, watchedAt, rate);
    
    return res.status(CREATED).json(addTalker);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

const update = async (req, res) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const { id } = req.params;
    
    const objReq = { name, age, watchedAt, rate, id };
    
    const updateTalker = await talkerService.update(objReq);

    return res.status(OK).json(updateTalker);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

const deleteTalker = async (req, res) => {
  try {
    const { id } = req.params;
    await talkerService.deleteTalker(id);
    console.log(id);
    return res.status(NO_CONTENT).end();
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteTalker,
};