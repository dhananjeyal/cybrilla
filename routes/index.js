var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'CYBRILLA' });
});
/* GET register page. */
router.get('/register', function(req, res, next) {
  
  res.render('registration', { title: 'CYBRILLA' });
});

module.exports = router;
