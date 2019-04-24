const request = require('request')

function getStrainByID(id, callback) {
    request('http://strains.n-x.win/api/strain/' + id, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return callback(body);
    });
}

function getStrainsByName(name, callback) {
    request('http://strains.n-x.win/api/search?name=' + encodeURIComponent(name), { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return callback(body);
    });
}

function getStrainsByEffect(name, callback) {
    request('http://strains.n-x.win/api/search?effects=' + encodeURIComponent(name), { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return callback(body);
    });
}

module.exports = { getStrainByID, getStrainsByName, getStrainsByEffect };