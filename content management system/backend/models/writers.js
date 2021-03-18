const mongoose= require('mongoose')
const Schema= mongoose.Schema


const writerschema= new Schema({
   
   name:{type:String,
       },
    works:{type:String,
        },
    image:String
})

var writerdata=mongoose.model('book',writerschema);
module.exports=writerdata