const Company = require('../models/companyModel');

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao carregar empresas', error: err });
  }
};

const addCompany = async (req, res) => {
  const { name, cnpj, address, phone } = req.body;

  const newCompany = new Company({
    name,
    cnpj,
    address,
    phone,
  });

  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao adicionar empresa', error: err });
  }
};

const deleteCompany = async (req, res) => {
  const { cnpj } = req.params;

  try {
    const deletedCompany = await Company.findOneAndDelete({ cnpj });
    if (deletedCompany) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Empresa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir empresa', error: err });
  }
};


const updateCompany = async (req, res) => {
  const { cnpj } = req.params;
  const { name, address, phone } = req.body;

  try {
    const updatedCompany = await Company.findOneAndUpdate(
      { cnpj },
      { name, address, phone },
      { new: true }
    );

    if (updatedCompany) {
      res.json(updatedCompany);
    } else {
      res.status(404).json({ message: 'Empresa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar empresa', error: err });
  }
};

module.exports = { getCompanies, addCompany, deleteCompany, updateCompany };
