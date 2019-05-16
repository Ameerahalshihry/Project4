require('dotenv').config()
const PORT = process.env.PORT
const URL = process.env.URL
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
//jwt and passports
const jwt = require('jsonwebtoken')
const passport = require('passport')
const clientRouter = require('./routes/clients.routes')
const providerRouter = require('./routes/providers.routes')
const serviceRouter = require('./routes/services.routes')
const skillRouter = require('./routes/skills.routes')
const Service = require('./models/service')


//-----------------MiddleWares----------------------
app.use(cors())
app.use(express.urlencoded({ extended : true}))//for form data
app.use(express.json()) // receive json from req.body
app.set('view engine', 'ejs')
app.use(expressLayout)
app.use(passport.initialize())
app.use(passport.session())
//-----------------DBConfig----------------------
mongoose.connect(URL ,{
    useNewUrlParser : true,
    useCreateIndex : true})
.then(()=> console.log("mongodb running"), 
(err) => console.log(err))
// mongoose.set("",)


//-----------------Routes----------------------
app.use('/auth', require('./routes/auth.routes'))
app.use('/clients', clientRouter)
app.use('/providers',passport.authenticate('jwt', {session: false}), providerRouter)
app.use('/services', serviceRouter)
// app.use('/services',passport.authenticate('jwt', {session: false}), serviceRouter)
app.use('/skills', skillRouter)


app.get('/services', (request, response)=>{
    Service.find({})
    .then(services => {
    response.status(200).json({ services : services})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})

 //------------Post new----------
 app.post('/services', (request, response)=>{
    let data = {
    name : request.body.name,
    description : request.body.description,
    duration :request.body.duration,
    cost:request.body.cost
    }

    let service = new Service (data)

    service.save()
    .then(()=> {
    
    response.status(200).json({ service : service, message: "saved"})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})

app.get('/services/:id', (request, response)=>{
    Service.findById(request.params.id)
    .then(service => {
    response.status(200).json({ service})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})

//------------Update ----------
app.put('/services/:id', (req, res) => {
    //find service 5cc31a3ba5893a210fa23428"
    let inputData = {
        name : req.body.name,
        description : req.body.description,
        duration :req.body.duration,
        cost:req.body.cost
    }

    Service.findOneAndUpdate({_id: req.params.id},{$set:inputData})
    .then(service => {
    res.status(200).json({...service})
    }).catch(err => {
    res.json({message: err })
    })
})
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