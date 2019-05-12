const express = require('express')
const router = express.Router()
const Skill = require('../models/skill')

//------------Get----------
router.get('/', (request, response)=>{
    Skill.find({})
    .then(skills => {
    response.status(200).json({ skills : skills})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})
//------------Post----------
router.post('/', (request, response)=>{

    let data = {
    name : request.body.name,
    level : request.body.level

    }

    let skill = new Skill (data)

    skill.save()
    .then(()=> {
    
    response.status(200).json({ skill : skill, message: "saved"})
    })
    .catch(err => {
    response.send({ message : err})
    })
    
})



module.exports = router;