const express=require('express');
const libraryrouter= express.Router();
const Book =require('../models/books')
const mongoose =require('mongoose')
const db= "mongodb://localhost:27017/project"
mongoose.connect(db,{  useNewUrlParser: true,useUnifiedTopology: true},err=>{
    if(err){
        console.log('error')
    }else{
        console.log('library connected')
    }
})  


libraryrouter.get('/books', function(req,res){
    
    Book.find()
                .then(book=>{
                    res.send(book);
                });
});

libraryrouter.get('/books/:id',  (req, res) => {
  
    const id = req.params.id;
      Book.find({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })
 
libraryrouter.post('/addbook',(req,res)=>{
   
   
    var book= {       
      
   bookname:req.body.book.name,
   author:req.body.book.author,
  genre:req.body.book.genre,
   language:req.body.book.language,
   image:req.body.book.image
   }       
   var newbook = new Book(book);
   newbook.save();
   
})

libraryrouter.delete('/delete/:id',(req,res)=>{
   
    id = req.params.id;
    Book.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  libraryrouter.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,  
    Bookname=req.body.bookname,
    Author=req.body.author,
   Genre=req.body.genre,
    Language=req.body.language,
    image=req.body.image

  Book.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "bookname":Bookname,
                                "author":Author,
                                "genre":Genre,
                                "language":Language,
                                "image":image,
                                }})
   .then(function(){
       res.send();
   })
 })


module.exports=libraryrouter