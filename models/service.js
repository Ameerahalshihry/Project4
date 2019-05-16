const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name : { type: String, required: true},
    description : { type: String, required: true},
    duration : { type: String, required: true},
    cost:{ type: Number , required: true}
},{timestamps : true})

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema)
module.exports = Service