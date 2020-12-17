const express = require('express');
const loginRouter = express.Router();
const Logindata = require('../model/Logindata')
function  router(nav){


    loginRouter.get('/',function(req,res){
    res.render("login",
        {
            nav,
            title:'login'
        });
    });

    loginRouter.post('/success',function (req,res) {

        const { username, password } = req.body;
        console.log(username, password );

           Logindata.findOne({username:username})
            .then(function(user){
            console.log(user);
            if(password==user.password){
                console.log("sucess");
                res.redirect('/books');
            }
            else{
                res.render('incorrectpassword');
            }
            });
    
            // res.redirect('/books/none');
    
        });



    return loginRouter;
}


module.exports = router;