const { nanoid } = require('nanoid');
// const loginModel = require('../models/writeAndReadFile');

const loginService = () => {
  const token = nanoid(16);
  return token;
};

module.exports = {
  loginService,
};