const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const loginSchema = require('../schema/loginValidation');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const objToValidate = {
    email,
    password,
  };
  const { error } = loginSchema.validate(objToValidate);

  if (error) return res.status(BAD_REQUEST).json({ message: error.message });

  next();
};

module.exports = loginValidation;