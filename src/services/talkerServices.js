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

const update = async (objOfReq) => {
  const { name, age, watchedAt, rate, id } = objOfReq;
  console.log(id);
  const objToUpdate = {
    name,
    age,
    talk: { watchedAt,
      rate },
  };

  const currTalkers = await talkerModel.read();

  const findTalker = currTalkers.find(({ id: talkerId }) => talkerId === Number(id));
  
  Object.assign(findTalker, objToUpdate);
  
  await talkerModel.write(currTalkers);

  return findTalker;
};

const deleteTalker = async (id) => {
  const currTalkers = await talkerModel.read();

  const exclude = currTalkers.filter(({ id: talkerId }) => talkerId !== Number(id));

  console.log(exclude);

  await talkerModel.write(exclude);

  return exclude;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteTalker,
};