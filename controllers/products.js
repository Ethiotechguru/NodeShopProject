const Product = require('../models/product')
exports.getAddProducts = (req, res, next)=>{
    res.render('add-product.ejs', 
            {
                pageTitle:"Add Products", 
                path:'/add-product'
            })
}

exports.postProducts = (req, res, next)=>{
    const product = new Product(req.body.title, req.body.price);
    product.save();
    res.redirect('/')
    console.log(product);
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products =>{
        res.render(
            "shop.ejs", 
            {
                pageTitle:"Products", 
                prods:products, 
                path:'/shop'
            }
        )
    });
}