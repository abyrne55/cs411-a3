var express = require('express');
var straindb = require('../models/strain.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* [['playlist-link', 'Playlist-name'], ['playlist-link', 'playlist-name']] */
  straindb.getStrainByID(3);
  res.render('index', { results: [] });
});


module.exports = router;
