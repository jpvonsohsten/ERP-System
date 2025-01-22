import React from 'react';
import { Button, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function CompanyList({ companies, onDelete }) {
  return (
    <Box>
      {companies.map((company) => (
        <Paper key={company.cnpj} style={{ padding: '10px', marginBottom: '10px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <div>
              <strong>{company.name}</strong> - {company.cnpj}
            </div>
            <Box>
              <Link to={`/edit-company/${company.cnpj}`}>
                <Button color="primary">Editar</Button>
              </Link>
              <Button onClick={() => onDelete(company.cnpj)} color="secondary">Excluir</Button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default CompanyList;
