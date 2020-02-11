const Product = require('../models/product')
exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-product.ejs', 
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
            "shop/product-lists.ejs", 
            {
                pageTitle:"Products", 
                prods:products, 
                path:'/shop'
            }
        )
    });
}

exports.getCart = (req, res, next)=>{
    res.render('shop/cart.ejs',
    {
        pageTitle:"Cart",
        path:'/cart'
    }
    )
}
exports.getShopList = (req, res, next)=>{
    Product.fetchAll(products =>{
        res.render(
            "shop/index.ejs", 
            {
                pageTitle:"All products", 
                prods:products, 
                path:'/all-products'
            }
        )
    });
}
exports.getAdminProductList = (req, res, next)=>{
    res.render(
        'admin/products.ejs',
        {
            pageTitle:"Admin Products",
            path:'/admin-products'
        }
        )
}