const express = require ('express')
const {urlencoded} = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const connected = require('./config/db')
// const { Route } = require('express')
// const router =  express.Router()


connected()
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended : false}))
app.use('/users', require('./route/route'))



app.listen(PORT , ()=>{
    console.log(`listening on port  ${PORT}`)
})