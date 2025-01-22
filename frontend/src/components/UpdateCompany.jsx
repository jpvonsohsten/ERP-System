import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

function UpdateCompany({ companies, onUpdate }) {
  const { cnpj } = useParams(); // Obtém o CNPJ da URL
  const navigate = useNavigate();
  const [company, setCompany] = useState(null); // Inicializa como null
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cnpj: '',
  });

  useEffect(() => {
    // Encontra a empresa correspondente ao CNPJ fornecido
    const selectedCompany = companies.find((comp) => comp.cnpj === cnpj);
    if (selectedCompany) {
      setCompany(selectedCompany);
      setFormData({
        name: selectedCompany.name || '',
        address: selectedCompany.address || '',
        cnpj: selectedCompany.cnpj || '',
      });
    }
  }, [cnpj, companies]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(cnpj, formData); // Atualiza a empresa
    navigate('/'); // Volta para a página inicial
  };

  if (!company) {
    return <p>Carregando dados da empresa...</p>;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Endereço"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="CNPJ"
        name="cnpj"
        value={formData.cnpj}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        disabled // CNPJ não pode ser alterado
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Salvar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/')}
          style={{ marginLeft: '16px' }}
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateCompany;
