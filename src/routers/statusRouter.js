const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusControllers.js');

router.get('/', statusController.msg);

router.get('/:id', statusController.id);

module.exports = router;