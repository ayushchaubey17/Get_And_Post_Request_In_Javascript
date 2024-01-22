let express = require('express');
let path  = require('path');

let app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended : true}));

let port =3000;

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})



app.get('/register',(req,res)=>{
    console.log(req.query);
       let {nme,pwd}  =req.query;

    //    res.send(`hello ${nme} your password is ${pwd}`)


    res.render("home.ejs",{nme,pwd});
});

app.post('/register',(req,res)=>{
    console.log(req.body);
    console.log("req recieved")
       let {nme,pwd}  =req.body;

    //    res.send(`hello ${nme} your password is ${pwd}`)


    res.render("post.ejs",{nme,pwd});
});