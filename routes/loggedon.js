var express = require('express');
var straindb = require('../models/strain.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('loggedon', { });
});


module.exports = router;


