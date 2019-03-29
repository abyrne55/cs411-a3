var express = require('express');
var spotify = require('../models/access_token');
var router = express.Router();

spotify.getToken();

/* GET search listing. */
router.post('/', function (req, res, next) {
    var keyword = req.body.playlist_name;
    spotify.spotifyApi.searchPlaylists(keyword)
        .then(function (data) {
            console.log('Found playlists are', data.body);
            playlists = [];
            for (var i = 0; i < data.body.playlists.items.length; i++) {
                playlists.push([data.body.playlists.items[i].external_urls['spotify'], data.body.playlists.items[i].name])
            }
            res.render('index', {results: playlists});
        }, function (err) {
            console.log('Something went wrong!', err);
        });
});

module.exports = router;
