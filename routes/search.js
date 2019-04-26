var express = require('express');
var straindb = require('../models/strain');
var playlistdb = require('../models/playlist');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection succeeded.");
});

var Schema = mongoose.Schema;

const strainSchema = new Schema({
    id: Number,
    name: String,
    Description: String,
    effects: String,
    ailment: String,
    flavor: String,
    expires: Date,
//    playlists: Object
});


var Strain = mongoose.model("Strain3", strainSchema);

// POST search listing.
router.post('/', function (req, res, next) {
    let strain_name = req.body.strain_name;
    Strain.find({'name' : new RegExp(strain_name, 'i')}, function(err, docs){
        x = new Date();
        //console.log(x.getTime());
        //right now something will expire after 20 minutes
        //console.log(docs[0].expires.getTime())
        //console.log(x.getTime() - docs[0].expires.getTime());
        if(docs[0]){
            playlistdb.getPlaylistsByEffects(docs[0].effects, function (playlists) {
                res.render('index', {strain: docs[0], results: playlists});
        });
        }
        else{
            straindb.getStrainsByName(strain_name, function (strain_list) {
                if (strain_list && strain_list.length && strain_list[0].effects) {
                    let strain = strain_list[0];
                    //console.log(strain);
                    playlistdb.getPlaylistsByEffects(strain.effects, function (playlists) {
                        var addStrain = new Strain({
                            id: strain.id,
                            name: strain.name,
                            Description: strain.description,
                            effects: strain.effects,
                            ailment: strain.ailment,
                            flavor: strain.flavor,
                            expires: new Date(),
 //                           playlists: playlists
                        });
                        //console.log(playlists, typeof(playlists));
                        addStrain.save(function(error) {
                            console.log("strain saved!");
                            if (error) {
                                console.log(error);
                            }
                        });
                        res.render('index', {strain: strain, results: playlists});
                    });
                } else {
                    res.render('index', {strain: 0, results: []});
                }
            });

        }

    });

});

module.exports = router;
