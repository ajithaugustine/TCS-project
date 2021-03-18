const express= require('express')
const bodyparser=require("body-parser")
let app=express()
const cors =require('cors')


const loginrouter=require('./routes/login');
const signuprouter=require('./routes/signup');
const membersrouter=require('./routes/members');
const libraryrouter=require('./routes/library')




app.use(bodyparser.json())
app.use(cors())

app.use('/login',loginrouter)
app.use('/signup',signuprouter)
app.use('/user',membersrouter)
app.use('/library',libraryrouter)
 










var port=3000
app.listen(port,()=>console.log('port is ready at:'+port))

