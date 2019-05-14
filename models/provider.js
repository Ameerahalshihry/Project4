const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = new Schema({
    firstName:{ type: String, required: true},
    lastName:{ type: String, required: true},
    email : { type: String, required: true},
    username : { type: String, required: true},
    password : { type: String, required: true},
    phone:{ type: Number },
    skills:[{ type: Schema.Types.ObjectId, ref : 'Skill'}],
    services:[{ type: Schema.Types.ObjectId, ref : 'Service'}]
},{timestamps : true})

const Provider = mongoose.model('Provider', providerSchema)
module.exports = Provider