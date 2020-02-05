const path = require('path')//Nodejs core module

const express = require('express');//third-party Module(express)
const adminData = require('./admin');
const router = express.Router(); //express router method
router.get('/', (req, res, next)=>{
    const products  = adminData.products;
    res.render("shop.ejs", {pageTitle:"Products", prods:products, path:'/shop'})
});

module.exports = router;