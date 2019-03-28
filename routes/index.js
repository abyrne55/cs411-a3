var express = require('express');
var router = express.Router();
var playlist = require('../models/playlist');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { results: [playlist.findPlaylist] });
});

module.exports = router;
