const Buffer = require('buffer').Buffer


const buf = Buffer.from('Study nodejs')

console.log(buf.toString())
console.log(buf.toString('utf16le'))


