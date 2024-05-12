require('dotenv').config()
//async errors 
require('express-async-errors')

//set express
const express = require('express')
const app = express()

const connectDb = require('./db/connect')
const myRouter = require('./routes/products')
//other modules and variables 
const http = require ('http')
const port =process.env.PORT || 3003

//async error handling 
const notFound = require ('./middleware/not-found')
const errorMiddleware = require ('./middleware/error-handler')

//express middleware 
app.use(express.json())
/* app.use('./public') */


//routes 
app.get('/' , (req, res)=>{
    res.send('<h1>STORE API ...</h1><a href="/api/v1/products">products </a></a>')
})
app.use('/api/v1/products', myRouter)

app.use ( notFound)

app.use(errorMiddleware)

const start = async () =>{
    try {
        //connect to db
        await connectDb(process.env.MONGO_URI)
        app.listen(port , ( )=>{
            console.log(`server here ${port}  `);
        })
    } catch (error) {
        console.log(error);
    }
}

start()