const products = [];
exports.getAddProducts = (req, res, next)=>{
    res.render('add-product.ejs', 
            {
                pageTitle:"Add Products", 
                path:'/add-product'
            })
}

exports.postProducts = (req, res, next)=>{
    console.log(req.body.title);
    products.push({title:req.body.title, price:req.body.price})
    res.redirect('/')
    console.log(products);
}

exports.getProducts = (req, res, next)=>{
    res.render("shop.ejs", {pageTitle:"Products", prods:products, path:'/shop'})
}