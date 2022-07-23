const mongoose = require('mongoose');

const admSchema = new mongoose.Schema({
    nome: {type: String}, // required: true e tambem unique true
    email:{type: String}, //required: true e tambem unique
    password:{type: String}, //required: true e tambem unique
},
{
    versionKey:false

})

const adm = mongoose.model('adm',admSchema)

module.exports= adm