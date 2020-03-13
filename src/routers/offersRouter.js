const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offerControllers.js');

router.get('/', offersController.getAllOffers);

router.get('/:id', offersController.getOffer);

module.exports = router;