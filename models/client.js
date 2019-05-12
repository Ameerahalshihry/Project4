    const mongoose = require('mongoose')
    const Schema = mongoose.Schema
    const bcrypt = require('bcrypt')
    const saltRounds = 10


    const clientSchema = new Schema({
        firstName:{ type: String, required: true},
        lastName:{ type: String, required: true},
        email : { type: String, required: true, unique : true},
        username : { type: String, required: true, unique : true},
        password : { type: String, required: true},
        phone:{ type: Number },
        services:[{ type: Schema.Types.ObjectId, ref : 'Service'}]
    },{timestamps : true})

    clientSchema.pre('save', function(next){

        let client = this

        if(client.password && client.isModified('password')){
            
        bcrypt.hash(client.password, saltRounds, (err, hash)=>{
            if(err){ return next()}

            client.password = hash
            next()
        })
        }

    })

    clientSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {

        bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
        if(err) { 
            return cb(err) 
        }
        return cb(null, response)
        })
    }


    const Client = mongoose.model('Client', clientSchema)
    module.exports = Client