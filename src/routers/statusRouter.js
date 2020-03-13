const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusControllers.js');

router.get('/', statusController.msg);

module.exports = router;