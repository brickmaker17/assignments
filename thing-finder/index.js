const express = require ('express');
const bodyParser = require ('body-parser');
const uuid = require ('uuid');

let fruits = require('./database');

const app = express();
let port = 8000;

app.use(bodyParser.json());

app.get('/fruits', (req, res) => {
    let query = req.query;
    let filteredFruits = fruits.filter((fruit) => {
        let found = true;
        for(let key in query) {
            var fruitString = fruit[key].toString();
            if(fruitString !== query[key]){
                found = false;
                break;
            }
        }
        return found;
    })
    res.send(filteredFruits);
});

app.post('/fruits', (req, res) => {
    let newFruit = req.body;
    newFruit._id = uuid();
    fruits.push(newFruit);
    res.send({
        msg: "Data added successfully",
        data: newFruit
    })
});
app.get('/fruits/:id', (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundFruit;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i]._id === id) {
            found = true;
            foundFruit = fruits[i];
            break;
        }
    }
    if(found){
        res.send({
            msg: `Item ${id} found!`,
            data: foundFruit
        })
    } else {
        res.send({
            msg: `Brand ${id} not found!`
        })
    }
});
app.delete('/fruits/:id', (req, res) => {
    let { id } = req.params;
    let found = false;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i]._id === id) {
            fruits.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        })
    } else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.put('/fruits/:id', (req, res) => {
    let { id } = req.params;
    let updatedFruit = req.body;
    let found = false;
    for (let i = 0; i < fruit.length; i++) {
        if (fruits[i].id === id) {
            fruits[i] = Object.assign(fruits[i], updatedFruit);
            updatedFruit = fruit[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedCoin
        })
    } else {
        res.send({
            msg: `Item ${id} was not found`
        })
    }
})

app.listen(port, () => {
    console.log('Listening on port' + port);
});
