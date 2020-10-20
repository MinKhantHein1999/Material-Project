const router = require ('express').Router();
const User = require('../model/user')
const Blog = require('../model/blog')
const jwt = require('jsonwebtoken');

router.post('/newBlog',async (req,res)=>{
    const blognew = new Blog({
        title : req.body.title,
        body : req.body.body,
        createdBy : req.body.createdBy,
    })
    try {
        const newblog = await blognew.save();
        res.json({success : true, message : "Blog Saved!"})
        
    } catch (error) {
        res.json({success : false , message :error})
    }
})

router.get('/allBlogs',async(req,res)=>{
    try {
        const blog = await  Blog.find();
        res.json({success : true, 'blogs' :blog});
    } catch (error) {
        res.json({success : false, message : error})
    }
})



module.exports = router;