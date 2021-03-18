const mongoose= require('mongoose')
const Schema= mongoose.Schema


const bookschema= new Schema({
   
    bookname:{type:String,
       },
    author:{type:String,
        },
    genre:{type:String,
        },
    language:{type:String,
        },
    image:{type:String
    }
})

var bookdata=mongoose.model('book',bookschema);
module.exports=bookdata