var express = require('express');
var router = express.Router();

function getAuthCookie() {
  return 'someotherstring';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  // TODO Login API request
  var auth_cookie = getAuthCookie();
  req.session.cookie['auth'] = auth_cookie;
  res.redirect('/reset');
});

module.exports = router;
