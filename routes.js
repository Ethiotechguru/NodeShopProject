const fs = require('fs');
const requestHandler = (req, res)=>{
    console.log(typeof req, typeof res, typeof req.method,  typeof req.headers);
    let url = req.url;
    let method = req.method;
    setTimeout(()=>{
        console.log("hello Timer")
    }, 6000)
    if(url === '/'){
        res.write('<html><head><title>Home Page</title></head><body><p>Form</p><form action="/message" method="POST"><input type = "text" name = "message"><button type="submit">Send</button></form></body></html>');
         res.end();
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            let message = parsedBody.split('=')[0];
            console.log(message);
            fs.writeFile('message.txt',message, ()=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        }) 
    }
}
module.exports = requestHandler;