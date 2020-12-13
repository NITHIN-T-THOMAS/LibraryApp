const express = require('express');
const adminRouter = express.Router();

function router(nav){

    adminRouter.get('/',function(req,res){
    res.render("addbook",
        {
            nav,
            title:'Add Book',
        });
    });

    adminRouter.get('/added',function(req,res){
        res.send("hey i am added");
        });

    return adminRouter;
}

module.exports = router;