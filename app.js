const express = require('express');
const path = require('path');
const app = express();

const userModel = require('./usermodel');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req,res){
    res.render("index");
});



app.listen(3000);