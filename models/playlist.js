var express = require('express');
var spotify = require('../models/access_token');

function getPlaylistsByName(name, callback) {
    spotify.getToken(function () {
        spotify.spotifyApi.searchPlaylists(name)
            .then(function (data) {
                playlists = [];
                for (var i = 0; i < data.body.playlists.items.length; i++) {
                    playlists.push([data.body.playlists.items[i].external_urls['spotify'], data.body.playlists.items[i].name]);
                }
                return callback(playlists);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    });
}

function getPlaylistsByEffects(effects, callback) {
    let query = effects.split(',').join(' OR ');
    console.log(query);
    spotify.getToken(function () {
        spotify.spotifyApi.searchPlaylists(query)
            .then(function (data) {
                playlists = [];
                var len = data.body.playlists.items.length;
                if(data.body.playlists.items.length>10){
                    len = 10;
                }
                for (var i = 0; i < len; i++) {
                    playlists.push([data.body.playlists.items[i].external_urls['spotify'], data.body.playlists.items[i].name]);
                }
                return callback(playlists);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    });
}

module.exports = { getPlaylistsByName, getPlaylistsByEffects };