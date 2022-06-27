const express = require('express');
const talkerController = require('../controllers/talkerController');

const router = express.Router();

router.get('/', talkerController.getAll);

router.get('/:id', talkerController.getById);

module.exports = router;