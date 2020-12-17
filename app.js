const express = require('express');
const app = express();
const methodOverride = require('method-override')
const port = process.env.PORT || 5000

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/Login',name:'Login'
    },
    {
        link:'/signup',name:'signup'
    },
    {
        link:'/admin',name: 'admin'
    }
]

const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs'); // view engine
app.set('views','./src/views');// to set the path of the current directory
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);


app.get('/',function(req,res){
    res.render("index",
        {
            nav,
            title:'library'
        });
    });

app.listen(port,()=>{console.log("server Ready at" + port)});
