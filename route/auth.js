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
});

//Profile

router.use((req,res,next)=>{
  const token = req.headers['authorization'];
  if(!token){
    res.json({success:false,message:'No token provided'});
  }else{
    jwt.verify(token,confit.secret,(err,decoded)=>{
      if(err){
        res.json({success:false,message:'Token Invalid'})
      }
      else{
        req.decoded = decoded;
        next();
      }
    })
  }
});
router.get("/profile",(req,res)=>{
  User.findOne({_id:req.decoded.userId}).select('username email').exec((err,user)=>{
    if(err){
      res.json({success:false,message: err})
    }
    else{
      if(!user){
        res.json({success:false,message:'User not found'})
      }
      else{
        res.json({success:true,user:user})
      }
    }
  })
})
module.exports = router;