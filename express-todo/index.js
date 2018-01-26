const express = require('express');
const bodyParser = require('body-parser');

const todos = require('./database');

const app = express();
let port = 8080;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.post('/todos', (req, res) => {
    todos.push(req.body);
    res.send({
        msg: "you did it",
        data: req.body,
        
    })
})

app.listen(port, ()=>{

});