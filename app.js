
const curriculo = require('./controllers/controllers.js')
const express = require('express');
const port = 2020;
const app = express();

app.get('/', (req, res, next) => {
    res.json(
    curriculo
    );
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});






/*
//const express = require('express')
const port = 2020;
//const routes = require('./routes')
const app = require('express')
const curriculo = require('./controllers/controllers')

app.get('/', (req, res, next) => {
    res.json(
       curriculo 
    ); 
});

app.listen(port, function(){
    	console.log(`Servidor Rodando na porta: ${port}`)
})
*/
