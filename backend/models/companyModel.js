const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
