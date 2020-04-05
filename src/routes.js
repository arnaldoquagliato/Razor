const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    const body = req.body;
    console.log(body);

    return res.json({
        trabalho: "Database",
        projeto:"Razor",
        description:"Mainly function it´s schedule a barber",
        aluno:"Arnaldo Quagliato"
    })
});


module.exports = routes