const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    //res.send('On login')
    res.sendFile(__dirname+'/form.html')
})


module.exports = router