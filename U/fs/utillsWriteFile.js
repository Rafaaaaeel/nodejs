const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const content = `Create a file using promisify`

writeFile('utilArquivo', content).then(()=>{
    console.log('Created')
}).catch((err)=>{
    console.log(`ERROR: ${err}`)
})