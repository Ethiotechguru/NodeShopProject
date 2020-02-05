const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, './home.html'))
})
app.post('/about', (req, res, next)=>{
    let name = req.body.title;
    console.log(name)
    res.write(`<h1>Hello ${name}`);
})
app.get('/about', (req, res, next)=>{
    res.sendFile(path.join(__dirname, './about.html'))
})


app.listen(8000, ()=>{
    console.log('Listening on port 8000')
})