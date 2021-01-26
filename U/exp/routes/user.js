const { request, response } = require('express')
const express = require('express')
const router = express.Router()

function logResquest(req, res, next){
    console.log('Using middleWare for user routes')
    return next()
}

router.get('/', logResquest, (request, response)=>{
    response.send('All users')
})
router.get('/:id', (request, response)=>{
    response.send('user: '+request.params.id)
})



module.exports = router