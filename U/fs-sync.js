const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("before")

const dados = fs.readFileSync("file.txt");

console.log("start console after the file")

console.log((process.hrtime()[0]/60).toFixed(5));