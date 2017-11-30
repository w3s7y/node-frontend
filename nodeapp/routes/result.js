var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.cookies);
  // TODO Cookie validation from API (again)
  if (req.cookies['authenticate'] === 'someotherstring') {
    res.render('result', { title: 'Unlock Status Page' });
  } else {
    res.redirect('/?errmsg=No Cookie Present');
  }
});

module.exports = router;
