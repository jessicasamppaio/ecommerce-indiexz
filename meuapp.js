const express = require('express');
const app = express();

// Configurando middleware para processar solicitações JSON
app.use(express.json());

// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('Página inicial do meu site');
  });

  // Configurando o Express para servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Middleware de erro para lidar com rotas não encontradas
app.use((req, res, next) => {
    res.status(404).send('Desculpe, esta página não foi encontrada.');
});