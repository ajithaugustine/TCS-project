const mongoose= require('mongoose')
const Schema= mongoose.Schema


const userschema= new Schema({
   
    name:{type:String,
        unique:true},
    email:{type:String,
        unique:true},
    password:String
})

var userdata=mongoose.model('user',userschema);
module.exports=userdata