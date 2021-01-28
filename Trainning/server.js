const express = require('express')
const { listenerCount } = require('process')
const loginRoutes = require('./Routes/login')
const app = express()
const port = 3000
const host = '127.0.0.1'


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})


app.use('/login', loginRoutes)

app.listen(port, host, ()=>{
    console.log(`Server running at: http://${host}:${port}`)
})



