var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '595baad9a3584651a41e0be0e8813420';
var clientSecret = '678b0f0dee334466a6a568c1b252d33c';

// Create the api object with the credentials
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

            // Save the access token so that it's used in future calls
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
