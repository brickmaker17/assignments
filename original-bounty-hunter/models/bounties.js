const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const databaseSchema = new Schema({
    firstName: String,

    lastName: String,
    
    living: Boolean,
    
    bountyAmount: Number,

    type: String 

});

module.exports = mongoose.model('Bounty', databaseSchema);
