const { writeFile } = require('fs')

function createFile(name, content){
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

createFile('promeseArquivo.txt','Criei o arquivo usando promses')
    .then(()=> console.log("Arquivo criado com sucesso"))
    .catch(err => console.log(err))