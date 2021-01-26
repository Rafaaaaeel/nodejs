console.log('executando module=01.js')

oculta = ()=>{
    console.log('função oculta')
}

executa = ()=>{
    console.log('Função executa')
}

welcome = 'Hello world module=1.js'

module.exports = { executa, welcome }