//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictlib.xusnv.mongodb.net/LIBRAARY?retryWrites=true&w=majority');

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
