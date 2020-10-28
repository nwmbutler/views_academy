var express = require('express');
var router = express.Router();

router.get('/blogs', function(res, next) {
  res.render('blogs', { layout: 'blogs'});
});

module.exports = router;