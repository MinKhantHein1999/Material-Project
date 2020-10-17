const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
// const secret = require('./confit/secret')
const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://minkhanthein:123@mean-angular.hkxiz.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{
    console.log("DB is connected")
})

app.use (express.static(__dirname + '/client/dist/client'))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
})


app.listen(PORT,()=>{
    console.log("Server is running on port at " + PORT)
})