const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',function(req,res){
    res.send("LESGOOO! Mongodb");
});


app.get('/create', async (req,res) =>{
    let createduser = await userModel.create({
        name: "Alina",
        email: "alina@gmail.com",
        username: "alina"
    })
    res.send(createduser);
});

app.get('/update', async (req,res) =>{
    
    let updateduser = await userModel.findOneAndUpdate({username: "hanzala"}, {name: "Muhammad Hanzala"}, {new: true})
    res.send(updateduser);
    
});

app.get('/users', async (req,res)=>{
    let users = await userModel.find();
    // let users = await userModel.findOne({username: "hanzala"});
    res.send(users);
})

app.get('/delete', async (req,res)=>{
    let deleteduser = await userModel.findOneAndDelete({username: "ali"});
    res.send(deleteduser);
})

app.listen(3000);