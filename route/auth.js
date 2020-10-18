const router = require ('express').Router();
const User = require('../model/user')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken');
const confit = require ('../confit/secret')
router.post('/register', async (req,res)=>{

    const exitEmail = await User.findOne({ email: req.body.email })

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);


    const reguser = new User({
        username : req.body.username,
        email : req.body.email,
        password : hash,
    })
    try {
        if (exitEmail) {
            return res.json({success : false, message : 'Email Already Exist'})
          }

        const saveUser = await reguser.save();
        res.json({success : true , message : 'User Register Successful'})
    } catch (error) {
        res.json({success : false, message : 'Could not save user!'})
    }
})

router.post("/login",async (req,res)=>{
    const user = await User.findOne({email : req.body.email});
    if(!user){
      return res.json({success : false, message : 'Invalid Email'})
    }

    const validPass = await bcrypt.compare(req.body.password,user.password)
    if(!validPass){
      return res.json({success : false, message : 'Invalid Password'})
    }
    else{
      const token = jwt.sign({userId : user._id},confit.secret,{expiresIn : '24hr'})
      return res.json({success : true, message:'Login Successful', token : token , user : {username : user.username}})
    }
})
module.exports = router;