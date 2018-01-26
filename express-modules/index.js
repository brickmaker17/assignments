const express = require("express");
const bodyParser = require("body-parser");
const uuid = require('uuid');


let coins = require('./database.js');

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());

//routes
//req = request object and res = response object
app.get('/coins', (req, res) => {
    let query = req.query;
    let filteredCoins = coins.filter((coin) => {
        let found = true;
        for(let key in query) { //convention to write key and query is the object
            var coinString = coin[key].toString();
            if(coinString !== query[key]){
                found = false;
                break;
            }
        }
        return found;
    })
    res.send(filteredCoins);
});


app.post('/coins', (req, res) => {
    let newCoin = req.body;
    newCoin._id = uuid();
    coins.push(newCoin);
    res.send({
        msg: "Data added successfully",
        data: newCoin
    });
});
app.get("/coins/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundCoin;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            found = true;
            foundCoin = coins[i];
            break;
        }
    }
    if(found){
        res.send({
            msg: `Item ${id} found`,
            data: foundCoin
        })
    } else {
        res.send({
            msg: `Price ${id} not found!`
        })
    }
});
app.delete('/coins/:id', (req, res) => {
    let { id } = req.params;
    let found = false;
    // coins = coins.filter((coin) => coin._id !== id);
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins.splice(i, 1);
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

app.put('/coins/:id', (req, res) => {
    let { id } = req.params;
    let updatedCoion = req.body;
    let found = false;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins[i] = Object.assign(coins[i], updatedCoin); //adjust what is in database
            updatedCoin = coins[i]; //updated object 
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