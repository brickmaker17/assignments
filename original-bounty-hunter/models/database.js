const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const databaseSchema = new Schema({
    first_name: String,

    last_name: String,
    
    living: Boolean,
    
    bounty_amount: Number,

    type: String 

});

module.exports = mongoose.model('Bounty', databaseSchema);
