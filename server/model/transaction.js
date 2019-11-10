const mongoose = require('mongoose');

const Schema = mongoose.Schema
const transactionSchema = new Schema({
    name : String,
    date : String,
    item: String,
    weight : String,
    price : String,
    total : String,
    paid : String
})

module.exports = mongoose.model('transaction', transactionSchema, 'transactions')