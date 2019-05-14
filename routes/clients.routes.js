                const express = require('express')
                const router = express.Router()
                const Client = require('../models/client')
                const jwt = require('jsonwebtoken');
                const passport = require('passport');
                
                const passportHelper = require('../config/passport')

        //------------------log in---------------------------
            //     router.get('/auth', (req, res, next) => {
            //         const email = req.body.email;
            //         const password = req.body.password;

            //     //Check the user exists
            //         Client.findOne({email: email}, (err, client) => {
            //     //Error during exuting the query
            //     if (err) {
            //     return res.send({
            //         success: false,
            //         message: 'Error, please try again'
            //     });
            //     }

            //     //No User match the search condition
            //     if (!client) {
            //     return res.send({
            //         success: false,
            //         message: 'Error, Account not found'
            //     });
            //     }

            //     //Check if the password is correct
            //     client.verifyPassword(password, client.password, (err, isMatch) => {

            //         //Invalid password
            //         if (!isMatch) {
            //         return res.send({
            //             success: false,
            //             message: 'Error, Invalid Password'
            //         });
            //         }
            //         //User is Valid
            //         // const ONE_WEEK = 604800; //Token validtity in seconds
            //         //Generating the token
            //         // const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: ONE_WEEK });

            //         //User Is Valid
            //         //This object is just used to remove the password from the retuned fields
            //         let returnClient = {
            //         name: client.name,
            //         email: client.email,
            //         id: client._id
            //         }

            //         //Send the response back
            //         return res.send({
            //         success: true,
            //         message: 'You can login now',
            //         client: returnClient,
            //         // token
            //         });
            //     });

            // });

            //     })


       
        //-----------------Update--------------------------------

        router.put('/client/:id', (req, res) => {
            let inputData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone:req.body.phone
                // email : req.body.email,
                // clientname : req.body.username,
                // password : req.body.password
            }

            Client.findOneAndUpdate({_id: req.params.id},{$set:inputData})
            .then(client => {
            res.status(200).json({...client})
            }).catch(err => {
            res.json({message: err })
            })
        })
        module.exports = router;