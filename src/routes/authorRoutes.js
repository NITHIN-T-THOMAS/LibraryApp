const express = require('express');
const authorsRouter = express.Router();
function  router(nav){
    var authors = [
        {
            title: 'Joseph Barbera',
            author: 'cartoon',
            genre: 'Tom and Jerry',
            img:'joseph.jpg'
        },
        {
            title: 'J K Rowling',
            author: 'Fantasy',
            genre: 'Harry Potter',
            img:'JK.jpg'
        },
        {
            title: 'Dan Brown',
            author: 'Mystery Thriller',
            genre: 'The Da Vinci Code',
            img:'dan.jpg'
        }
    ]

    authorsRouter.get('/',function(req,res){
    res.render("authors",
        {
            nav,
            title:'authors',
            authors
        });
    });

    authorsRouter.get('/addAuthor',function(req,res){ // here '/books' is given such that whenever a link referred to books.ejs is called it should render this
    res.render("addAuthor",
        {
            nav,
            title:'Add Author',
            authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'library',
            author: authors[id]
        });
    });

    return authorsRouter;
}


module.exports = router;