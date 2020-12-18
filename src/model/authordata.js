//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictlib.xusnv.mongodb.net/LIBRAARY?retryWrites=true&w=majority');

//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    genre: String,
    work: String,
    img: String
});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
