const mongoose = require('mongoose');

const Schema1 = mongoose.Schema
const userSchema = new Schema1({
    name : String,
    userName : String,
    address : String,
    role : String,
    password : String,
    mobileNumber : Number
})

module.exports = mongoose.model('user', userSchema, 'users')