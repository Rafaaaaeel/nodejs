
const http = require('http');
const host = '127.0.0.1';
const port = 8080;
const fs= require('fs');

http.createServer( (req,res) => {
    fs.readFile('index.html',(err,data) => {
       res.writeHead (200, {'content-type': 'text/html'});
    res.write(data);
    return res.end(); 
    })
}).listen(port);

console.log(`Start server, running at http://${host}:${port}`)


fs.appendFile(`Log.txt` , `User: wagner luis pires, 57`, (err) =>{
    if(err) throw err;
    console.log('Saved!')
});

//fs.unlink('mynewfile2.txt', function (err, file) {
    //if (err) throw err;
    //console.log('Deleted!');
  //});

fs.writeFile('Log.txt', 'User: Rafael oliveira pires, 19', (err)=>{
    if (err) throw err;
    console.log('Replaced');
})

