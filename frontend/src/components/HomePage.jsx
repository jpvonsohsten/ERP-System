import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container style={{ textAlign: 'center', paddingTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Bem-vindo ao Sistema de Cadastro e Gerenciamento de Empresas
      </Typography>
      <Typography variant="h5" paragraph>
        Esse é um sistema simples e intuitivo para gerenciar empresas.
      </Typography>
      
      <Box style={{ marginBottom: '40px' }}>
        <img
          src="https://gestoron.com.br/wp-content/uploads/2022/02/sistema-de-gestao-gestoron.jpeg"
          alt="Ilustração"
          width="800"
          style={{ borderRadius: '8px' }}
        />
        <Typography variant="h6" paragraph>
          Acesse a página de empresas para cadastrar, editar e excluir informações.
        </Typography>
      </Box>

      <Box style={{ marginBottom: '40px' }}>
        <Typography variant="h4" paragraph>
          Como funciona?
        </Typography>
        <Typography variant="body1" paragraph>
          O sistema permite o cadastro de empresas com informações como nome, CNPJ, endereço e telefone. Após o cadastro, você pode visualizar, editar e excluir as empresas.
        </Typography>
      </Box>

      <Link to="/companies">
        <Button variant="contained" color="primary">
          Gerenciar Empresas
        </Button>
      </Link>
    </Container>
  );
}

export default HomePage;
