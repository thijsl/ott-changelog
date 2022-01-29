const MongoClient = require( 'mongodb' ).MongoClient;
const uri = "";
let _db;
let _client;

module.exports = {
    connect: async function( callback ) {
        _client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        _client.connect(async () => {
            _db = _client.db("ott_changelog");
            callback(_db);
            // perform actions on the collection object
            // client.close();
        });
    },
    getDb: function() {
        return _db;
    },
    close: function() {
        _client.close();
    }
};