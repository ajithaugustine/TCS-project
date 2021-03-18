const express=require('express');
const membersrouter= express.Router();
const jwt =require("jsonwebtoken");
const User =require('../models/user')
const mongoose =require('mongoose')
const db= "mongodb://localhost:27017/project"
mongoose.connect(db,{  useNewUrlParser: true,useUnifiedTopology: true},err=>{
    if(err){
        console.log('error')
    }else{
        console.log('user data founded')
    }
}) 
function verifytoken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("unauthorized request")
    }let token =req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('unauthorized request')
    }
    let payload= jwt.verify(token,'secretkey')
    if(!payload){
        return res.status(401).send('unauthorized request')
    }
    req.userId =payload.subject
    next()
}

membersrouter.get('/',verifytoken, function(req,res){
    
    User.find()
                .then(function(users){
                    res.send(users);
                });
});

module.exports=membersrouter