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

module.exports = {
  getAll,
  getById,
};