    const express = require('express')
    const router = express.Router()
    const Service = require('../models/service')

    //------------Get----------
    router.get('/', (request, response)=>{
        Service.find({})
        .then(services => {
        response.status(200).json({ services : services})
        })
        .catch(err => {
        response.send({ message : err})
        })
        
    })
    //------------Post----------

    router.post('/', (request, response)=>{

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


    module.exports = router;