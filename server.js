const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    const body = [];
    console.log('this is header:' + req.headers, 'this is url:' +req.url, 'this is method:' +req.method);
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>My Form</title></head>')
        res.write('<form action="/message" method="POST"><input type="text" name="name"><button type="submit">submit</button></form>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/message' && method === 'POST'){
        
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
            
        })
       return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1]
            console.log(message);
            fs.writeFile('message.text', message, (err)=>{
                res.statusCode = 302;
                res.setHeader =('Location', '/')
                res.write(`<h1>${message}</h1>`)
                res.write('</h1>')
                return res.end()
            })
        })
    }
        res.write('<html>')
        res.write('<head><title>My Form</title></head>')
        res.write('<h1>this is the default page for all the route except / and /message</h1>')
        res.write('</html>')
        res.end();
        console.log(body);
});
server.listen(3001, (res, req)=>{
    console.log("Server is listening at port 3001");
});