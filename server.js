require('dotenv').config()
const PORT = process.env.PORT
const URL = process.env.URL
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cors = require('cors')
const clientRouter = require('./routes/clients.routes')
const providerRouter = require('./routes/providers.routes')
const serviceRouter = require('./routes/services.routes')
const skillRouter = require('./routes/skills.routes')


//-----------------MiddleWares----------------------
app.use(cors())
app.use(express.urlencoded({ extended : true}))//for form data
app.use(express.json()) // receive json from req.body
app.set('view engine', 'ejs')
app.use(expressLayout)

//-----------------DBConfig----------------------
mongoose.connect(URL ,{
    useNewUrlParser : true,
    useCreateIndex : true})
.then(()=> console.log("mongodb running"), 
(err) => console.log(err))
// mongoose.set("",)


//-----------------Routes----------------------
app.use('/api/clients',clientRouter)
app.use('/api/providers',providerRouter)
app.use('/api/services',serviceRouter)
app.use('/api/skills',skillRouter)

//--cannot find route--
app.use('*', (request, response) => {
    response.status(404).json({message : "Data not found!"})
   })

app.get('/', (req, res) => {
    res.send('Hello')
})

// app.post('/hello', (req, res) => {
//     const name = req.body.name
//     res.send({
//         message : `Welcome ${name}`
//     })
// })
//-----------------Listen----------------------
app.listen(PORT, ()=> console.log(`running on ${PORT}`))