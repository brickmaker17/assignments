const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const bountyRouter = require('./routes/bounties');

const app = express();
// let port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use("/bounties", bountyRouter);

mongoose.connect('mongodb://localhost:27017/bounties', () => {
    console.log('Connected to MongoDB');
})




app.listen(8080, () => {
    console.log('Connected to port 8080');
});