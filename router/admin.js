const path = require('path')
const express = require('express');
const router = express.Router();
const prodController = require('../controllers/products')
router.get('/add-product', prodController.getAddProducts)
router.post('/', prodController.postProducts)

module.exports = router;
