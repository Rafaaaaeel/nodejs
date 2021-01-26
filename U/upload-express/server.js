const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const host = '127.0.0.1'
const port = 3000
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true} ))



const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'uploads/')
    },
    filename: (req, file, callback)=>{
        callback(null, file.fieldname+''+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})


app.get('/', (req, res)=>{
    //res.json({message: 'Welcome'})
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload', upload.single('file'), (req, res, next)=>{
    const file = req.file
    if(!file){
        const err = new Error('Please select a file')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(file)
    //res.end('file uploaded')
})

app.listen(port, host, ()=>{
    console.log(`Server running on http://${host}:${port}`)
})