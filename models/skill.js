const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = new Schema({
    name : { type: String, required: true},
    level :{ type: Number, default: 25}
},{timestamps : true})

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema)
module.exports = Skill