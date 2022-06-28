const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers/loginController');

const loginValidation = require('../middleware/login');

router.post('/', loginValidation, loginController);

module.exports = router;