const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata')
function  router(nav){
    // var authors = [
    //     {
    //         title: 'Joseph Barbera',
    //         author: 'cartoon',
    //         genre: 'Tom and Jerry',
    //         img:'joseph.jpg'
    //     },
    //     {
    //         title: 'J K Rowling',
    //         author: 'Fantasy',
    //         genre: 'Harry Potter',
    //         img:'JK.jpg'
    //     },
    //     {
    //         title: 'Dan Brown',
    //         author: 'Mystery Thriller',
    //         genre: 'The Da Vinci Code',
    //         img:'dan.jpg'
    //     }
    // ]

    authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function (authors){
        res.render("authors",
        {
            nav,
            title:'authors',
            authors
        });
    })

    });

    authorsRouter.get('/addAuthor',function(req,res){
    res.render("addAuthor",
        {
            nav,
            title:'Add Author'
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id: id})
        .then(function (authors) {
            res.render('author',{
                nav,
                title:'library',
                author: authors[id]
            });
        })

    });

    authorsRouter.get('/edita/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            console.log(author);
            res.render('edita',{
                    nav,
                    title:'Update',
                    author
                });
            })

    });

    authorsRouter.post('/b/:id',  function(req,res){
        const id=req.params.id
       
        const item={
        name :req.body.name,
        genre:req.body.genre,
        work:req.body.work,
        img:req.body.img
        }
        console.log(item);
        Authordata.findByIdAndUpdate({_id:id},{$set:item},function () {
            res.redirect("/authors");
            
        });

    });

    authorsRouter.get('/l/t/:id',function(req,res){
        const id=req.params.id
        Authordata.findByIdAndDelete({_id:id},function () {
                res.redirect("/authors");
            })

    });


    return authorsRouter;
}


module.exports = router;