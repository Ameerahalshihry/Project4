const express = require('express')
const router = express.Router()
const Provider = require('../models/provider')

 //------------Get all----------
router.get('/', (request, response)=>{
    Provider.find({})
    .then(providers => {
    response.status(200).json({ providers : providers})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})
   //------------Post new----------
    router.post('/', (request, response)=>{
    let data = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email : request.body.email,
    phone : request.body.phone,
    skills : request.body.skills,
    services :request.body.services
    }

    let provider = new Provider (data)

    provider.save()
    .then(()=> {
    
    response.status(200).json({ provider : provider, message: "Provider info is saved"})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})



module.exports = router;