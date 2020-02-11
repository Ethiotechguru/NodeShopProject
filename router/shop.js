const path = require('path')//Nodejs core module

const express = require('express');//third-party Module(express)
const adminRoutes = require('./admin');
const prodControllers = require('../controllers/products')
const router = express.Router(); //express router method
router.get('/all-products', prodControllers.getShopList);
router.get('/', prodControllers.getProducts);

module.exports = router;