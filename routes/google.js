var express = require('express');
var router = express.Router();
const Models = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Validator = require('../middlewares/Validator')
const User = Models.User;
dotenv.config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




  
const passport = require('passport');
var userProfile;

router.get('/success', async(req, res, next)=>{
  var usr = {
    first_name : userProfile._json.given_name,
    last_name : userProfile._json.family_name,
    email : userProfile.emails[0].value
  };
  created_user = await User.create(usr);
  res.status(201).json(created_user);

});

// router.get('/success', (req, res) => res.send(userProfile.emails[0].value +userProfile._json.given_name +userProfile._json.family_name ));
router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

/*  Google AUTH  */
 
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '489817311243-j01e62te9s7r1lrjp0ooj2at807oe1jr.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/auth/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
router.get('/auth', 
passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/auth/callback', 
passport.authenticate('google', { failureRedirect: '/error' }),
function(req, res) {
  // Successful authentication, redirect success.
  res.redirect('/google/success');
});



// router.post('/', Validator('register'),async(req, res, next)=>{
//   // res.status(201).json(req.body);
//   //add new user and return 201
//   const salt = await bcrypt.genSalt(10);
//   var usr = {
//     first_name : req.body.first_name,
//     last_name : req.body.last_name,
//     email : req.body.email,
//     password : await bcrypt.hash(req.body.password, salt)
//   };
//   created_user = await User.create(usr);
//   res.status(201).json(created_user);
// });

// router.post('/login',Validator('login'),async(req,res,next)=>{
//   const user = await User.findOne({ where : {email : req.body.email }});
//   if(user){
//      const password_valid = await bcrypt.compare(req.body.password,user.password);
//      if(password_valid){
//          token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
//          res.status(200).json({ token : token });
//      } else {
//        res.status(400).json({ error : "Password Incorrect" });
//      }
   
//    }else{
//      res.status(404).json({ error : "User does not exist" });
//    }
   
//    });

//    router.get('/me',
//  async(req,res,next)=>{
//   try {
//     let token = req.headers['authorization'].split(" ")[1];
//     let decoded = jwt.verify(token,process.env.SECRET);
//     req.user = decoded;
//     next();
//   } catch(err){
//     res.status(401).json({"msg":"Couldnt Authenticate"});
//   }
//   },
//   async(req,res,next)=>{
//     let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
//     if(user === null){
//       res.status(404).json({'msg':"User not found"});
//     }
//     res.status(200).json(user);
//  }); 
module.exports = router;