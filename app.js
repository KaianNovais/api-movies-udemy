// 1- inportamos o express e o cors
const express = require('express');
const cors = require('cors');
const rotas = require('./routes/filmes')

//2- criamos o objeto express
const myApp = express();

myApp.use(cors());
myApp.use(express.json());
myApp.use('/api/filmes', rotas)

module.exports = myApp;










