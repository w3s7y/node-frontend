var express = require('express');
var router = express.Router();


function getAuthCookie() {
  // TODO Login API request
  return 'someotherstring';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  res.cookie('auth', getAuthCookie());
  res.redirect('/reset');
});

module.exports = router;
