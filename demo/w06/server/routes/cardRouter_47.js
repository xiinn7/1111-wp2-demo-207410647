var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_47/index', { name: 'Cindy Chen' ,id:'207410647' });
});

module.exports = router;
