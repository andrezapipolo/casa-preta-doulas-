const mongoose = require("mongoose");

const doulasSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  contato: { type: Number, required: true },
  email: { type: String, required: true }
});


const doulas = mongoose.model('doulas', doulasSchema);

module.exports = doulas;