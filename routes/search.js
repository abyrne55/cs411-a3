var express = require('express');
var straindb = require('../models/strain');
var playlistdb = require('../models/playlist');
var router = express.Router();


// POST search listing.
router.post('/', function (req, res, next) {
    let strain_name = req.body.strain_name;
    straindb.getStrainsByName(strain_name, function(strain_list){
       if (strain_list && strain_list.length && strain_list[0].effects) {
           let strain = strain_list[0];
           playlistdb.getPlaylistsByEffects(strain.effects, function(playlists){
               res.render('index', {strain: strain, results: playlists});
           });
       } else {
           res.render('index', {strain: 0, results: []});
       }
    });

});

module.exports = router;
