
/*
const curriculo = require('./controllers/controllers')


const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.json({
        status: "Api rodando",
        code: 200
    });
})

routes.get('/api/curriculo',curriculo.main);

routes.get('*', function (req, res) {
    res.json({
        error: 404,
        about: "Rota não encontrada"
    });
});

module.exports = routes;
*/


/*
const { Router } = require('express')
const routes = Router();
const curriculo = require('./controllers/controllers')

routes.get('/',(req, res, next) => {
    res.json(curriculo.main)

})



module.exports = routes;
*/