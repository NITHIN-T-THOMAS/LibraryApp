const express = require('express');
const adminRouter = express.Router();
const BookData = require('../model/bookdata')

function router(nav){

    adminRouter.get('/',function(req,res){
    res.render("adminIndex",
        {
            nav,
            title:'Welcome Admin',
        });
    });


    adminRouter.post('/added',function(req,res){
        var item = {
            title: req.body.Book_Name,
            genre: req.body.Genre,
            author: req.body.Author_Name,
            img: req.body.Image
        }

        var bookAddData = BookData(item);
        bookAddData.save(); //all params will be saved to the database
        res.redirect('/books')

        });

    return adminRouter;
}

module.exports = router;