const {writeFile} = require('fs');

writeFile("file.txt", "New text file", err =>{
    if(err) throw err;

    console.log('File created');
})