const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();
/* bodyParser.urlencoded({}) codifica a URL (transfora em URI) para conseguirmos
    retornar um arquivo JSON (bodyParser.json()) e manipularmos da forma que quisermos.
*/
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(expressValidator());

// Modulo Consign importa todas as rotas da pasta "routes" e inclui  a variável app dentro de cada rota
consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', () =>{

console.log("Servidor rodando");

});