// const http = require('http');
const path = require('path')
const express = require('express');


const bodyParser = require('body-parser')
// const expressHbs = require('express-handlebars');

const app = express()
const adminRoutes = require('./router/admin');
const shopRoutes = require('./router/shop')
const errorRoutes = require('./router/404');
// app.engine('hbs', expressHbs({
//     extname:'hbs',
//     defaultLayout:null
// }))
// app.set('view engine', 'hbs')
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', "views")
app.set('views', path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes.router);
app.use(shopRoutes)
app.use(errorRoutes);

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

