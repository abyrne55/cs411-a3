var express = require('express');
var straindb = require('../models/strain');
var playlistdb = require('../models/playlist');
var router = express.Router();


// POST search listing.
router.post('/', function (req, res, next) {
    let keyword = req.body.playlist_name;
    playlistdb.getPlaylistsByName(keyword, function(playlists){
       res.render('index', {results: playlists});
    });
});

module.exports = router;
