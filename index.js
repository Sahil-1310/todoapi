const express = require('express')
const app= express();

const bodyparser= require('body-parser');
app.use(bodyparser.json())
//importing router 
const router=require('./Router/Router')

const dotenv = require('dotenv');

dotenv.config();
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect(
    process.env.DB_CONNECT,
{ useNewUrlParser: true ,useUnifiedTopology:true},
()=>console.log('connected to db'));  

app.use('/',router)


app.listen(3000,()=>{console.log("connected to port=3000")})