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
