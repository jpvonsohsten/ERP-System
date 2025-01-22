import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCompany({ onAdd }) {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, cnpj, address, phone });
    setSuccessMessage('Empresa criada com sucesso!');
    setTimeout(() => {
      navigate('/companies');
    }, 1000);
    setName('');
    setCnpj('');
    setAddress('');
    setPhone('');
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
              onChange={(e) => setCnpj(e.target.value)}
              required
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
              Adicionar Empresa
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/companies')}
              fullWidth
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>

      {successMessage && (
        <Snackbar
          open={!!successMessage}
          message={successMessage}
          autoHideDuration={2000}
          onClose={() => setSuccessMessage('')}
        />
      )}
    </Paper>
  );
}

export default AddCompany;
