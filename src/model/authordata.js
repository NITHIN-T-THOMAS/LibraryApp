//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');

//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    genre: String,
    work: String,
    img: String
});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema); //Note: if the name is singular the database will show a plural name automatically i.e here 'bookdata' will become 'bookdatas' in database

module.exports = Authordata;
