var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '595baad9a3584651a41e0be0e8813420';
var clientSecret = '678b0f0dee334466a6a568c1b252d33c';

// credentials are optional and consult from https://www.npmjs.com/package/spotify-web-api-node
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token. consult from https://www.npmjs.com/package/spotify-web-api-node
function getToken(callback) {
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            return callback();
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
