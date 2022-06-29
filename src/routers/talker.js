const express = require('express');
const talkerController = require('../controllers/talkerController');
const { talkerValidation } = require('../middleware/talker');
const { tokenValidation } = require('../middleware/token');

const router = express.Router();

router.get('/', talkerController.getAll);

router.get('/:id', talkerController.getById);

router.post('/', tokenValidation, talkerValidation, talkerController.add);

module.exports = router;
