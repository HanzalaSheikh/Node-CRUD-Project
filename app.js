const express = require('express');
const path = require('path');
const app = express();

const userModel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req,res){
    res.render("index");
});

app.get('/read', async function(req,res){
    let users = await userModel.find()
    res.render("read", {users});
});

app.get('/delete/:id', async (req,res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});

app.get('/edit/:id', async (req,res) => {
    let user = await userModel.findOne({_id: req.params.id});
    res.render("edit", {user});
});


app.post('/create/', async function(req,res){
    let {name, email,image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect("/read");
});

app.post('/update/:id', async function(req,res){
    let {name, email,image} = req.body;
    let createdUser = await userModel.findOneAndUpdate({_id: req.params.id},{
        name,
        email,
        image
    }, {new: true})
    res.redirect("/read");
});


app.listen(3000);