const express = require('express');
const adminRouter = express.Router();
const BookData = require('../model/bookdata')
const AuthorData = require('../model/authordata')

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

        adminRouter.post('/s/addauth',function(req,res){
            var item = {
                name: req.body.name,
                genre: req.body.genre,
                work: req.body.work,
                img: req.body.img
            }
            console.log(item);

            var authorAddData = AuthorData(item);
            authorAddData.save(); //all params will be saved to the database
            res.redirect('/authors')
            });

    return adminRouter;
}

module.exports = router;