const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
// const secret = require('./confit/secret')
const mongoose = require ('mongoose');
const cors = require ('cors');


mongoose.connect("mongodb+srv://minkhanthein:123@mean-angular.hkxiz.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{
    console.log("DB is connected")
})


app.use (express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.use(cors());

const UserRouter = require('./route/auth');
app.use(express.json());
app.use('/auth', UserRouter);

const blogs = require ('./route/blogs')
app.use('/blogs',blogs);


app.listen(PORT,()=>{
    console.log("Server is running on port at " + PORT)
})