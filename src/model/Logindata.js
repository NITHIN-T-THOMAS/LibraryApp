//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');

//schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    genre: String,
    author: String,
    img: String
});

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema); //Note: if the name is singular the database will show a plural name automatically i.e here 'bookdata' will become 'bookdatas' in database

module.exports = Bookdata;