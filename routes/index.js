var express = require('express');
var router = express.Router();

router.get('/', function(res, next) {
  res.render('blogs', { layout: 'blogs'});
});

module.exports = router;
