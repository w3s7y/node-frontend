var express = require('express');
var router = express.Router();

function callResetApi() {

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.cookies);
  // TODO Cookie validation from API (again)
  if (req.cookies['auth'] === 'someotherstring') {
    res.render('reset', { title: 'Password Reset / Unlock' });
  } else {
    res.redirect('/?errmsg=No Cookie Present');
  }
});

router.post('/', function(req, res, next) {
  // TODO API call for resetting password.
  console.log(req.params);
  res.end('POST to /reset');
});

module.exports = router;
