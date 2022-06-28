const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const validation = require('../schema/loginValidation');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const objToValidate = {
    email,
    password,
  };
  const { error } = validation.validate(objToValidate);

  if (error) return res.status(BAD_REQUEST).json({ message: error.message });

  next();
};

module.exports = loginValidation;