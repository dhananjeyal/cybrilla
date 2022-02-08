var express = require('express');
var router = express.Router();
const Models = require('./../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Validator = require('../middlewares/Validator')
const User = Models.User;
dotenv.config();
const ShortenURL = Models.ShortenURL;

// : app.get(/:code)

// @route       GET /:code
// @description    Redirect to the long/original URL 
router.get('/:code',
async(req,res,next)=>{
    try {
      let token = req.headers['authorization'].split(" ")[1];
      let decoded = jwt.verify(token,process.env.SECRET);
      req.user = decoded;
      next();
    } catch(err){
      res.status(401).json({"msg":"Couldnt Authenticate"});
    }
    },
async (req, res) => {
    try {
        // find a document match to the code in req.params.code

        const uri = await ShortenURL.findOne({
            where: {
                urlCode: req.params.code
               }
        })
        if (uri) {
            // when valid we perform a redirect
            return res.redirect(uri.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router