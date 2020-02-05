const path  = require('path')
const express = require('express');
const router = express.Router();
const errorController = require('../controllers/404')
router.use('/', errorController.get404)

module.exports = router;