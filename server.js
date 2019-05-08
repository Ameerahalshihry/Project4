require('dotenv').config()
const PORT = process.env.PORT
const URL = process.env.URL
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

app.use(express.json()) // receive json from req.body

mongoose.connect(URL , {useNewUrlParser : true})
.then(()=> console.log("mongodb running"), 
(err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello')
})
app.listen(PORT, ()=> console.log(`running on ${PORT}`))