var express = require('express');

function findPlaylist(mood) {
    const playlist_search = spotifyApi.searchPlaylists(mood)
        .then(function (data) {
            return data.body.items;
        }, function (err) {
            return err;
        });
}