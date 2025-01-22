import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function EditCompany({ onUpdate, companies }) {
  const { cnpj } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const company = companies.find((company) => company.cnpj === cnpj);
    if (company) {
      setName(company.name);
      setAddress(company.address);
      setPhone(company.phone);
    }
  }, [cnpj, companies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = { name, cnpj, address, phone };
    onUpdate(cnpj, updatedCompany);
    navigate("/companies");
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome da Empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="CNPJ"
              value={cnpj}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
            fullWidth
            label="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
           />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Atualizar Empresa
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/companies")}>
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default EditCompany;
