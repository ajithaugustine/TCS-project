const express=require('express');
const loginrouter= express.Router();
const jwt =require("jsonwebtoken");
const User =require('../models/user')
const mongoose =require('mongoose')
const db= "mongodb://localhost:27017/project"
mongoose.connect(db,{  useNewUrlParser: true,useUnifiedTopology: true},err=>{
    if(err){
        console.log('error')
    }else{
        console.log('Login connected')
    }
})  
 
loginrouter.post('/',(req,res)=>{
    let userdata = req.body

    User.findOne(
        {email: userdata.email},(error,user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send("user don't exists")
                
            }else{
                if(user.password !==userdata.password){
                    res.status(401).send("wrong password")
                    
                }else{
                    let payload={ subject: user._id}
                    let token =jwt.sign(payload,'secretkey')

                    res.status(200).send({token});
            

                    
                }
            }
        }
    })
})


module.exports=loginrouter