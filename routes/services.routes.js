            const express = require('express')
            const router = express.Router()
            const Service = require('../models/service')

            //------------Get all----------
            router.get('/', (request, response)=>{
                Service.find({})
                .then(services => {
                response.status(200).json({ services : services})
                })
                .catch(err => {
                response.send({ message : err})
                })
                
            })
            //------------Post new----------
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
        //------------Update ----------
            router.put('/service/:id', (req, res) => {
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
        //-----------delete-----------------
        router.delete('/:id', (req, res)=>{
            Service.findByIdAndRemove(req.params.id, (err, data)=>{
                // res.redirect('/services')
                if(err) {
                    return next(new Error('project was not found!'));
                }
                res.json('Successfully removed');
                
            });
        });
        

            module.exports = router;