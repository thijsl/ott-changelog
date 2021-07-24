const Database = require('../database/Database');
const DB_NAME = 'errors';

class Error {
    constructor(type, sourceId, date) {
        this.type = type;
        this.sourceId = sourceId;
        this.date = date;
    }
    static create(parameters) {
        let error = new Error(
            parameters.type,
            parameters.sourceId,
            parameters.date
        );
        return error;
    }
    static getErrors() {
        return Database.getInstance().db.get(DB_NAME);
    }
    static add(parameters) {
        let error = this.create(parameters);
        this.getErrors()
            .push(error)
            .write();
        return error;
    }
}

module.exports = Error;