const MongoDB = require('../database/MongoDB');

class Error {
    constructor(type, sourceId) {
        this.type = type;
        this.sourceId = sourceId;
        this.date = new Date();
    }
    static create(parameters) {
        let error = new Error(
            parameters.type,
            parameters.sourceId
        );
        return error;
    }
    static async add(parameters) {
        let error = this.create(parameters);
        const db = MongoDB.getDb();
        const result = await db.collection("errors").insertOne(
            error
        );
        console.log("Added error:", result);
        return result;
    }
}

module.exports = Error;