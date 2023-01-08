const express=require('express');
const port=8000;

const app=express();

//setup ejs as a view engine 
app.set('view engine',"ejs");
app.set('views',"./views");

//access static file
app.use(express.static('./assets'));

var count = 0;
//handle urls 
app.get('/',function(req,res){
    return res.render('home',{
        title:"home",
        count:count
    })
})

//this is handle ajax req
app.get('/add',function(req,res){
    count++;
    //handling AJAX Request
    if(req.xhr){
        //sending response 
        return res.status(200).json({
            meassge:"Successfully",
            count:count
        })
    }
    return res.redirect('back');
})

//listen port 
app.listen(port,function(err){
    if(err){
        console.log("error in listen ports :: ",err);
        return;
    }
    console.log(`server is up on port ${port}`);
})