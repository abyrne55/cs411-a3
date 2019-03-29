var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* [['example-playlist-link', 'example-playlist-name'], ['example-playlist-link', 'example-playlist-name']] */
  res.render('index', { results: [] });
});

module.exports = router;
