import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CompanyList from './CompanyList';

function CompanyPage({ companies, searchQuery, onSearch, onDelete }) {
    return (
      <div>
        <h1 style={{textAlign: 'center', fontStyle: 'normal', textDecoration: 'none'}}>Gerenciar empresas cadastradas</h1>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={6} mt={3}>
          <TextField
            label="Pesquisar"
            value={searchQuery}
            onChange={(e) => onSearch(e)}
            variant="outlined"
            fullWidth
          />
          <Link to="/add-company">
            <Button variant="contained" color="primary" sx={{ width: 'auto', padding: '3.5px 10px', borderRadius: '2px' }}>
              Cadastrar Empresa
            </Button>
          </Link>
        </Box>
        <CompanyList companies={companies} onDelete={onDelete} />
      </div>
    );
}
  

export default CompanyPage;
