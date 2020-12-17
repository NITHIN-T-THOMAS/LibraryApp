const express = require('express');
const signupRouter = express.Router();
const Logindata = require('../model/Logindata')
function  router(nav){


    signupRouter.get('/',function(req,res){
    res.render("signup",
        {
            nav,
            title:'signup'
        });
    });

    signupRouter.post('/success',function (req,res) {

        var item={
            username:req.body.username,
            mobile:req.body.mobile,
            email:req.body.email,
            password:req.body.password

        }
        // console.log(req.body);
        var logcred = Logindata(item);
        logcred.save(function(err) {

            // console.log(err);
            if (err) {

                res.render("signupsuccess",{
                    nav,
                    title:'SIGNUP',
                    val:'Unsuccessfull'

                 });

            }
            else{
                res.redirect('/login');
            }

        });
    });

    return signupRouter;
}


module.exports = router;