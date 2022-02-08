// packages needed in this file
const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const Validator = require('../middlewares/Validator')

// creating express route handler
const router = express.Router();

// import the Url database model
const Models = require('./../models');
const ShortenURL = Models.ShortenURL;

// @route    POST /api/url/shorten
// @description     Create short URL

// The API base Url endpoint
const baseUrl = 'http://localhost:3000'


/* GET home page. */
router.get('/', function(req, res, next) {
  
    res.render('shorten', { title: 'CYBRILLA' });
  });

  router.get('/redirect', function(req, res, next) {
  
    res.render('redirect', { title: 'CYBRILLA' });
  });

router.post('/', Validator('shorten'),async(req, res, next)=>{
    // res.status(201).json(req.body);
    //add new URL and return 201
    let shortcode=shortid.generate();

    var uri = {
      longUrl : req.body.longUrl,
      urlCode : shortcode,
      shortUrl: baseUrl + '/' + shortcode
    };
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }
    let Shorten_URL = await ShortenURL.findOne({
        where: {
            longUrl: req.body.longUrl
           }
    })

    // url exist and return the respose
    if (Shorten_URL) {
        res.status(200).json(Shorten_URL)
    } else {
        Shorten_URL = await ShortenURL.create(uri);
        res.status(201).json(Shorten_URL);
    }
  });


  router.post('/redirect',Validator('shorten'),
  async(req,res,next)=>{
      try {
        let token = req.body.token.split(" ")[1];
        let decoded = jwt.verify(token,process.env.SECRET);
        req.user = decoded;
        next();
      } catch(err){
        res.status(401).json({"msg":"Couldnt Authenticate"});
      }
      }, async(req, res, next)=>{
    // res.status(201).json(req.body);
    //add new URL and return 201

    let shortUrl=req.body.longUrl
    var uri = {
      shortUrl : shortUrl.split("/")[2],
      token : req.body.token
    };
    if (!validUrl.isUri(req.body.shortUrl)) {
        return res.status(401).json('Invalid URL')
    }
    let Shorten_URL = await ShortenURL.findOne({
        where: {
            urlCode: urlCode
           }
    })

    // url exist and return the respose
    if (Shorten_URL) {
        res.status(200).json(Shorten_URL)
    } else {
        Shorten_URL = await ShortenURL.create(uri);
        res.status(201).json(Shorten_URL);
    }
  });



module.exports = router