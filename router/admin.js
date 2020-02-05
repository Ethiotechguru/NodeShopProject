const path = require('path')
const express = require('express');
const router = express.Router();
const products = [];
router.get('/add-product', (req, res, next)=>{
    res.render('add-product.ejs', {pageTitle:"Add Products", path:'/add-product'})
})
router.post('/', (req, res, next)=>{
    console.log(req.body.title);
    products.push({title:req.body.title, price:req.body.price})
    res.redirect('/')
    console.log(products);
})

exports.router = router;
exports.products = products;