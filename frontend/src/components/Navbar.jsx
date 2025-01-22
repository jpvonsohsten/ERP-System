import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as CrudIcon } from '../imgs/logoEmpresa.svg'; // Importe o SVG como componente

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            padding: '0 15px 0 0',
            textTransform: 'none',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center', // Alinha o conteúdo verticalmente
          }}
        >
          <CrudIcon style={{ width: '24px', height: '24px', marginRight: '8px' }} /> {/* SVG ajustado */}
          ERP
        </Button>
        <Button color="inherit" component={Link} to="/companies" style={{ textTransform: 'none', fontSize: '15px' }}>
          Empresas
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
