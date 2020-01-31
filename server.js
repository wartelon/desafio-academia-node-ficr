const app = require('./app')

const port = 2020;

app.listen(port, function(){
    	console.log(`Servidor Rodando na porta: ${port}`)
})





/*
const express = require('express');
const port = 2020;
const app = express();
const curriculo = require('./controllers/controllers')

app.get('/', (req, res, next) => {
    res.render( curriculo);
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
*/