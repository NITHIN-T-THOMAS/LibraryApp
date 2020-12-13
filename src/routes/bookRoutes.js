const express = require('express');
const booksRouter = express.Router();
function  router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'cartoon',
            img:'tom.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img:'harry.jpg'
        },
        {
            title: 'The Da Vinci Code',
            author: 'Dan Brown',
            genre: 'Mystery Thriller',
            img:'Robert.jpg'
        }
    ]

    booksRouter.get('/',function(req,res){ // here '/books' is given such that whenever a link referred to books.ejs is called it should render this
    res.render("books",
        {
            nav,
            title:'Books',
            books
        });
    });
    
    // booksRouter.get('/addbook',function(req,res){ // here '/books' is given such that whenever a link referred to books.ejs is called it should render this
    // res.render("addbook",
    //     {
    //         nav,
    //         title:'Add Books'
    //     });
    // });



    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'library',
            book: books[id]
        });
    });
    
    return booksRouter;
}


module.exports = router;