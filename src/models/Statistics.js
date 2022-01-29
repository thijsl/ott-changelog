const MongoDB = require('../database/MongoDB');

class Statistics {
    constructor(date, resources) {
      this.runDate = date;
      this.resources = resources;
    }
    static create(parameters) {
        let statistics = new Statistics(
            parameters.runDate,
            parameters.resources
        );
        return statistics;
    }
    static async getCrawlerLastRunDate() {
        const db = MongoDB.getDb();
        return await db.collection("statistics").find().sort({"runDate": -1}).limit(1).toArray()
    }
    static async add(parameters) {
        let statistics = this.create(parameters);
        const db = MongoDB.getDb();
        const result = await db.collection("statistics").insertOne(
            statistics
        );
        return result;
    }
}

module.exports = Statistics;