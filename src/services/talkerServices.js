const talkerModel = require('../models/writeAndReadFile');

const getAll = async () => {
  const result = await talkerModel.read();
  if (!result) return [];
  return result;
};

const getById = async (talkerId) => {
  const result = await talkerModel.read();
  if (!result) return [];
  const talkerFound = result.find(({ id }) => id === Number(talkerId));
  return talkerFound;
};

const add = async (name, age, watchedAt, rate) => {
  if (name && age && watchedAt && rate) {
    const newTalker = {
      name,
      age,
      id: 0,
      talk: { watchedAt,
        rate },
    };
    const currTalkers = await talkerModel.read();
    newTalker.id = currTalkers.length + 1;
    const addUser = [...currTalkers, newTalker];
    await talkerModel.write(addUser); 
    return newTalker;
  }
  return console.log('faltam dados');
};

module.exports = {
  getAll,
  getById,
  add,
};