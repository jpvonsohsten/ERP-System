import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography, Snackbar, Alert } from '@mui/material';
import Navbar from './components/Navbar';
import EditCompany from './components/EditCompany';
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';
import AddCompany from './components/AddCompany';
import UpdateCompany from './components/UpdateCompany';

function App() {
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Pode ser 'success' ou 'error'

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/companies');
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      setSnackbarMessage('Erro ao carregar empresas');
      setSnackbarSeverity('error');
    }
  };

  const addCompany = async (company) => {
    try {
      const response = await fetch('http://localhost:5000/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(company),
      });
      const newCompany = await response.json();
      setCompanies((prev) => [...prev, newCompany]);
      setSnackbarMessage('Empresa adicionada com sucesso');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Erro ao adicionar empresa');
      setSnackbarSeverity('error');
    }
  };

  const updateCompany = async (cnpj, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/companies/${cnpj}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      const updatedCompany = await response.json();
      setCompanies((prev) =>
        prev.map((company) => (company.cnpj === cnpj ? updatedCompany : company))
      );
      setSnackbarMessage('Empresa atualizada com sucesso');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Erro ao atualizar empresa');
      setSnackbarSeverity('error');
    }
  };

  const deleteCompany = async (cnpj) => {
    try {
      await fetch(`http://localhost:5000/api/companies/${cnpj}`, { method: 'DELETE' });
      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company.cnpj !== cnpj)
      );
      setSnackbarMessage('Empresa excluída com sucesso');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Erro ao excluir empresa');
      setSnackbarSeverity('error');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/companies"
            element={
              <CompanyPage
                companies={filteredCompanies}
                searchQuery={searchQuery}
                onSearch={handleSearch}
                onDelete={deleteCompany}
              />
            }
          />
          <Route
            path="/add-company"
            element={<AddCompany onAdd={addCompany} />}
          />
          <Route
            path="/edit-company/:cnpj"
            element={<UpdateCompany companies={companies} onUpdate={updateCompany} />}
          />
        </Routes>
        
        <Snackbar
          open={snackbarMessage !== ''}
          autoHideDuration={6000}
          onClose={() => setSnackbarMessage('')}
        >
          <Alert
            onClose={() => setSnackbarMessage('')}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Router>
  );
}

export default App;
