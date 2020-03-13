const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companyControllers.js');

router.get('/', companiesController.getAllCompanies);

router.get('/:id', companiesController.getCompany);

module.exports = router;