var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  // TODO Cookie validation from API (again)
  if (req.cookies['auth'] === 'someotherstring') {
    res.render('reset', { title: 'Password Reset / Unlock' });
  } else {
    res.send('No auth cookie');
  }
});

router.post('/', function(req, res, next) {
  // TODO API call for resetting password. 
  res.send('POSTED TO /reset')
});

module.exports = router;
