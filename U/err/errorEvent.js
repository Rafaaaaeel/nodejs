const { Console } = require('console')
const { EventEmitter } = require('events')

const emitter = new EventEmitter()

const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('tipo invalido'))
    }else{
        console.log('objeto valido')
    }
    
}
emitter.addListener('error', (err)=>{
    console.log('event: ' + err.message)
})

let dados = { name: 'Rafael', age: 19}

validaObjeto(dados)