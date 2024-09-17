const express = require('express');
const app = express();

// Configuração do Sequelize
const db = require('./config/database');

// Testar a conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Middlewares
app.use(express.json());

// Importar rotas
const rotasBebidas = require('./rotas/RotasBebidas');
const rotasComidas = require('./rotas/RotasBebidas');
const rotasPedidos = require('./rotas/RotasBebidas');
const rotasPessoas = require('./rotas/RotasBebidas');

// Usar rotas
app.use('/api', rotasBebidas);
app.use('/api', rotasComidas);
app.use('/api', rotasPedidos);
app.use('/api', rotasPessoas);

// Iniciar o servidore
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
``