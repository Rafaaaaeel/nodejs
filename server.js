const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain')
    res.end('Hello world my first script')
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)

    console.log("test")

    var name = "Rafael"
})