var express = require('express');
var router = express.Router();
var spotify = require('../models/access_token');
var SpotifyWebApi = require('spotify-web-api-node');

router.get('/', function (req, res, next) {
    res.render('login');

});

router.post('/', function (req, res, next) {
    var scopes = ['user-read-private', 'user-read-email'],
        redirectUri = "http://localhost:3000/loggedon",
        clientId = spotify.spotifyApi.getClientId(),
        state = 'some-state-of-my-choice';

    // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
    var spotifyApi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId
    });

    // Create the authorization URL
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

    // http://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
    console.log(authorizeURL);
    res.status(301).redirect(authorizeURL);
    //return res.redirect('/loggedon');//line I just added
});


module.exports = router;
