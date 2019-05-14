require('dotenv').config()    
    const Client = require('../models/client');
    const express = require('express')
    const router = express.Router()
    const jwt = require('jsonwebtoken');
    const passport = require('passport');

    const passportHelper = require('../config/passport')


 //--------------------registration-------------------------
 router.post('/register', (req, res, next) => {
    // res.send('I am registration')
    let newClient = new Client ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
        
    })
    newClient.save()
    .then(()=> {
        // res.send({newClient})
        res.status(200).json({ message : "Registered Successfully",newClient })
    })
    .catch( err => {
    res.status(401).json({ message : "You are not Allowed to Register", err: err})
    })

})


//--------------------log in-------------------------

router.post('/login', (request, response) => {
    console.log('err');

    passport.authenticate('local', {session: false}, (err, user, info) => {

    if (err || !user) {
        console.log(err);
        
        return response.status(401).json({
            message: info ? info.message : 'Login failed',
            user   : user
        });
    }

    request.login(user, {session: false}, (err) => {
            if (err) {
        console.log(err);

                return response.status(401).json({message: err});
            }
            // generate a signed json web token with the contents of user object and return it in the response
            user.password = '' //remove password
            console.log(user)
            const secret = process.env.JWTSecret
            const token = jwt.sign(user.toJSON(), secret , { expiresIn: 60 * 60 });
            return response.status(200).json({user, token});
        });
    })(request, response);
    
})

    module.exports = router
