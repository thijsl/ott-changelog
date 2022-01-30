const MongoClient = require( 'mongodb' ).MongoClient;
let _db;
let _client;

module.exports = {
    connect: async function( callback ) {
        _client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        _client.connect(async (error) => {
            _db = _client.db("ott_changelog");
            callback(error);
        });
    },
    getDb: function() {
        return _db;
    },
    close: function() {
        _client.close();
    }
};