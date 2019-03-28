var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({});

function findPlaylist(mood) {
    const playlist_search = spotifyApi.searchPlaylists(mood)
        .then(function (data) {
            return data.body.items;
        }, function (err) {
            return err;
        });
}

module.exports.findPlaylist = findPlaylist;