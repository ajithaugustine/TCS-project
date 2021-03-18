const express=require('express');
const signuprouter= express.Router();
const jwt =require("jsonwebtoken");
const User =require('../models/user')
const mongoose =require('mongoose')
const db= "mongodb://localhost:27017/project"
mongoose.connect(db,{  useNewUrlParser: true,useUnifiedTopology: true},err=>{
    if(err){
        console.log('error')
    }else{
        console.log('signup connected')
    }
})

signuprouter.post('/',(req,res)=>{
    let userdata=req.body
    let user= new User(userdata)
    user.save((error,registereduser)=>{

        if(error){
            console.log('error')
            res.status(401).send("name or email already in use, try anothor")
        }else{
            let payload={subject: registereduser._id}
            let token=jwt.sign(payload,'secretkey')

            res.status(200).send({token})
        }
    })
     
})



module.exports=signuprouter