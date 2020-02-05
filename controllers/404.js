exports.get404 = (req, res)=>{
    res.render('404.ejs', {pageTitle:"Page Not Found", path:'/'})
}