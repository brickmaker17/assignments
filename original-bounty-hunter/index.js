const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');

let bounties = require('./database.js');

const app = express();
let port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/bounties', (req, res) => {
    let query = req.query;
    let filteredBounties = bounties.filter((bounty) => {
        let found = true;
        for(let key in query) {
            var bountyString = bounty[key].toString();
            if(bountyString !== query[key]){
                found = false;
                break;
            }
        }
        return found;
    })
    res.send(filteredBounties);
});

app.post('/bounties', (req, res) => {
    let newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send({
        msg: "Data added successfully",
        data: newBounty
    });
});
app.get("/bounties/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundBounty;
    for(let i = 0; i < bounties.length; i++) {
        if (bounties[i]._id === id) {
            found = true;
            foundBounty = bounties[i];
            break;
        }
    }
    if(found){
        res.send({
            msg: `Item ${id} found`,
            data: foundBounty
        })
    } else {
        res.send({
            msg: `Price ${id} not found`
        })
    }
});
app.delete('/bounties/:id', (req, res) => {
    let { id } = req.params;
    let found = false;
    for (let i = 0; i < bounties.length; i++) {
        if (bounties[i]._id === id) {
            bounties.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was successfully removed`
        })
    } else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.put('/bounties/:id', (req, res) => {
    let {id} = req.params;
    let updatedBounties = req.body;
    let found = false;
    for (let i = 0; i < bounties.length; i++) {
        if(bounties[i]._id === id) {
            bounties[i] = Object.assign(bounties[i], updatedBounties);
            updatedBounties = bounties[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedBounties
        })
    } else {
        res.send({
            msg: `Item ${id} was not found`
        })
    }
})

app.listen(port, () => {
    console.log('Listening on port' + port);
})