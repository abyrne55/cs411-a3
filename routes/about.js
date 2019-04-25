var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    /* [['playlist-link', 'Playlist-name'], ['playlist-link', 'playlist-name']] */
    res.render('about', { results: [] });
});

module.exports = router;
