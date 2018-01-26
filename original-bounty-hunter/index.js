const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

let bounty = require('./database');

const app = express();
let port = 8080;


