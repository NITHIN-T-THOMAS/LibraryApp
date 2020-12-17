//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');

//schema definition
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    username: String,
    mobile: String,
    email: String,
    password: String
});

//Model creation
var Logindata = mongoose.model('Logindata',LoginSchema);

module.exports = Logindata;
