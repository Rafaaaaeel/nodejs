const { deepStrictEqual } = require('assert');
const fs = require('fs');

fs.readFile('texto.txt', (err, data)=>{
    if(err) throw err;

    //console.log(data.toString());
})


const text = fs.readFileSync("texto.txt")

console.log(`text: ${text}`)