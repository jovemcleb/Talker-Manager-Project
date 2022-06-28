const { loginService } = require('../services/loginService');
const { BAD_REQUEST, INTERNAL_SERVER, OK } = require('../helpers/httpStatusCode');

const loginController = async (req, res) => {
  try {
    const token = loginService();
    if (!token) {
      return res.status(BAD_REQUEST).json({ message: 'não foi possível autenticar' });
    }
    return res.status(OK).json({ token });
  } catch (error) {
    console.error(error.message);
    return res.status(INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
  }
};

module.exports = { loginController };