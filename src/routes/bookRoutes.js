const express = require('express');
const { db } = require('../model/bookdata');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata')
function  router(nav){
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'cartoon',
    //         img:'tom.jpg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img:'harry.jpg'
    //     },
    //     {
    //         title: 'The Da Vinci Code',
    //         author: 'Dan Brown',
    //         genre: 'Mystery Thriller',
    //         img:'Robert.jpg'
    //     }
    // ]

    booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",
        {
            nav,
            title:'Books',
            books
        });
    })

    });
    
    // booksRouter.get('/addbook',function(req,res){ // here '/books' is given such that whenever a link referred to books.ejs is called it should render this
    // res.render("addbook",
    //     {
    //         nav,
    //         title:'Add Books'
    //     });
    // });



    booksRouter.get('/:id',function(req,res){

        const id = req.params.id;
        console.log(id);
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                    nav,
                    title:'library',
                    book
                });
            })

    });

    booksRouter.get('/ad/d/addbook',function(req,res){
    res.render("addbook",
            {
                nav,
                title:'Add Book'
            });
        });


    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            console.log(book);
            res.render('edit',{
                    nav,
                    title:'Update',
                    book
                });
            })

    });

    //router that handles the updates
    booksRouter.post('/b/:id',  function(req,res){
        const id=req.params.id
       
        const item={
        title:req.body.title,
        genre:req.body.genre,
        author:req.body.author,
        img:req.body.img
        }
        console.log(item);
        Bookdata.findByIdAndUpdate({_id:id},{$set:item},function () {
            res.redirect("/books");
            
        });

    });

    booksRouter.get('/l/t/:id',function(req,res){
        const id=req.params.id
        Bookdata.findByIdAndDelete({_id:id},function () {
                res.redirect("/books");
            })

    });

    return booksRouter;
}


module.exports = router;