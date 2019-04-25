// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection succeeded.");
});

var Schema = mongoose.Schema;

var strainSchema = new Schema({
    _id: Number,
    name: String,
    Description: String,
    Type: String,
    flavor: String,
    effects: String,
    ailment: String,
    expires: Date
});

var personSchema = new Schema({
    first: String,
    last: String,
    faveGenre: String,
    spotToken: String,
    expires: Date
});

var Strain = mongoose.model("Strain", strainSchema);

var testStrain = new Strain({
    id: 1,
    name: '100 OG',
    Description: "Named after its high price",
    strainType: "Hybrid",
    flavor: "Citrus",
    effects: "Focused",
    ailment: "Depression",
    expires: new Date(1995, 11, 17)
});

db.Strain.find({"name": "StrainName"}, {limit:1})
//function returns 0 if not in DB, 1 if it is in DB








///this function adds testStrain to the DB
//testStrain.save(function(error) {
//    console.log("Your strain has been saved!");
//    if (error) {
//        console.error(error);
//    }
//});

//gives us everything stored in the Strain database
Strain.find({}, function (error, documents) {
    console.log(documents);
});


// try {
//     Strain.deleteMany( { "name" : '100 OG' } );
//     console.log('boo')
// } catch (e) {
//     console.log(e);
// }

//function used to delete all the entries in Strain
//Strain.deleteMany();