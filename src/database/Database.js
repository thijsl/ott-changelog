const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// import * as lowdb from 'lowdb";
class Database {

    constructor() {
        const adapter = new FileSync('db.json');
        this.db = low(adapter);
        this.db.defaults({articles: [], errors: []})
            .write();
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Database();
        }
        return this.instance;
    }

    static get(model) {
        return this.getInstance().db.get(model);
    }

}

module.exports = Database;
