const { UNAUTHORIZED } = require('../helpers/httpStatusCode');
const { tokenSchema } = require('../schema/tokenSchema');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  const { error } = tokenSchema.validate(authorization);

  if (error) {
    return res.status(UNAUTHORIZED).json({ message: error.message });
  }

  next();
};

module.exports = {
  tokenValidation,
};