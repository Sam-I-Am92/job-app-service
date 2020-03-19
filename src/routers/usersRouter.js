const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController.js');

// test for user id
router.get('/test/:id', usersController.id);

// get all users
router.get('/', usersController.getAllUsers);

// get user by id
router.get('/:id', usersController.getUser);

module.exports = router;