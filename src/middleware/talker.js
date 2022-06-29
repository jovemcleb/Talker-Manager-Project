const { talkerSchema } = require('../schema/newTalker');
const { BAD_REQUEST } = require('../helpers/httpStatusCode');

const talkerValidation = (req, res, next) => {
  const { name, age, talk } = req.body;

  const objToValidate = {
    name,
    age,
    talk,
  };

  const { error } = talkerSchema.validate(objToValidate);

  if (error) {
    return res.status(BAD_REQUEST).json({ message: error.message });
  }
  
  next();
};

module.exports = {
  talkerValidation,
};