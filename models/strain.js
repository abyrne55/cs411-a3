const request = require('request')

function getStrainByID(id) {
    request('http://strains.n-x.win/api/strain/' + id, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.url);
        console.log(body);
    });
}

module.exports = { getStrainByID };