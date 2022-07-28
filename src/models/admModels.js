const mongoose = require('mongoose');

const admSchema = new mongoose.Schema({
    nome: {type: String},
    email:{type: String},
    password:{type: String},
},
{
    versionKey:false

})

const adm = mongoose.model('adm',admSchema)

module.exports= adm