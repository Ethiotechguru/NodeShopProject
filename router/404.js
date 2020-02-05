const path  = require('path')
const express = require('express');
const router = express.Router();

router.use('/', (req, res)=>{
    res.render('404.ejs', {pageTitle:"Page Not Found", path:'/'})
})

module.exports = router;