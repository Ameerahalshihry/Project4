const express = require('express')
const router = express.Router()
const Skill = require('../models/skill')
const Provider = require('../models/provider')

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
//----------------find all providers have the same skill------------

router.get('/:id/providers', (req, res) => {
    Provider.find({})
    .then(providers => {
        let allProviders = providers.filter((provider)=> {
            let Allskills = provider.skills.filter((skill)=> skill.toString() == req.params.id)
            if (Allskills.length != 0){
                return provider
            }
        })
    res.status(200).json({ providers : allProviders})
    })
    .catch(err => {
    res.send({ message : err})
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