const express = require('express')
const router = express.Router()

router.get(':id',(request,Response)=>{
    //200 is everything ok 
    //Response.statusCode = 200
    Response.send('You are on admin using id ' + request.params.id)
})

router.post('/', (request, response)=>{
    const corpo = `Login: ${request.body.login}\n 
    Senha: ${request.body.senha}`
    response.send('Welcome to admin section using post \n ' + corpo)
})

router.patch('/:id', (request, response)=>{
    response.send('Admin using PATH')
})
router.put('/:id', (request, response)=>{
    response.send('Admin using PUT  ')
})
router.delete('/:id', (request, response)=>{
    response.send('Admin using delete')
})

module.exports = router