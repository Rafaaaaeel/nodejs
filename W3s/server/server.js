const http = require('http');
const port = 8080;
const url = require('url');
const fs = require('fs')

http.createServer((req, res)=>{
    const q = url.parse(req.url,true);
    const fileName = '.' + q.pathname;
    
    fs.readFile(fileName,(err, data)=>{
        if (err){
            res.writeHead(404, {'content-type': 'text/html'});
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);

