var express = require('express');
var router = express.Router();

router.get('/', function(res, next) {
  res.render('main', { layout: 'main'});
});

module.exports = router;
