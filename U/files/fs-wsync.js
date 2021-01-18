const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("before")

const dados = fs.readFile("file.txt",(err,data)=>{
    if(err) throw err 
    console.log("1")
})

console.log("start console after the file")

console.log((process.hrtime()[0]/60).toFixed(5));