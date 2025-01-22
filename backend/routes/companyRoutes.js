const express = require('express');
const { getCompanies, addCompany, updateCompany, deleteCompany } = require('../controllers/companyController');
const router = express.Router();

router.get('/companies', getCompanies);
router.post('/companies', addCompany);
router.put('/companies/:cnpj', updateCompany);
router.delete('/companies/:cnpj', deleteCompany);

module.exports = router;
