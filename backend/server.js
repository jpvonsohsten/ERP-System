const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
const port = 5000;

// Conexão com o MongoDB e configuração de frameworks
mongoose.connect('mongodb://localhost:27017/empresaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000,
})
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));


app.use(cors());
app.use(express.json());

app.use('/api', companyRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
