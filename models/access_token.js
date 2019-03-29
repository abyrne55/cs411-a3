var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '595baad9a3584651a41e0be0e8813420';
var clientSecret = '9bbb86e9414341fc9d5c63a782f4c668';

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token.
function getToken() {
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token
            spotifyApi.setAccessToken(data.body['access_token']);
        },
        function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        }
    );
}

module.exports = {
    spotifyApi,
    getToken
};
