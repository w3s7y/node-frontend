var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var authToken = req.session.cookie['auth'];
  if (authToken == 'someotherstring') {
    res.send('No auth cookie');
  } else {
    res.render('reset', { title: 'Password Reset / Unlock' });
  }
});

router.post('/', function(req, res, next) {
  res.send('POSTED TO /reset')
});

module.exports = router;
