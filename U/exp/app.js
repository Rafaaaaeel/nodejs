//Call the module "express"
const express = require('express') 
const adminRotes = require('./routes/admin')
const userRoutes = require('./routes/user')
const cookieParser = require('cookie-parser')
//Create a app using the express
const app = express()

app.use('/static',express.static('assets'))

app.use(express.json())

app.use(cookieParser())

app.use((req, res, next)=>{

    console.log('starting middle')

    return next()
})

app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Rafael oliveira pires', {maxAge: 900000, httpOnly: true})
    return res.send('cookie saved')
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user']
    if(user){
        return res.send(user)
    }
})

//Tell to app to get the information off server
app.get('/',(request,response)=>{
    //200 is everything ok 
    //Response.statusCode = 200
    response.send('Hello world')
})

app.use('/admin', adminRotes)//Function middleware call the adminRoutes
app.use('/user', userRoutes)//Function middleware call the userRoutes

app.get('*', (req,res,next)=>{
    setImmediate(()=>{
        next( new Error('We have a problem'))
    })
})

app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

//Saying to app listen the port 3000 and create a callback
app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`)
})