const myApp = require('./app');

const porta = 3000;

myApp.listen(porta, ()=>{console.log('Servidor Rodando...')});