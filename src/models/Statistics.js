const Database = require('../database/Database.js');
const DB_NAME = 'statistics';

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
    static getStatistics() {
        return Database.getInstance().db.get(DB_NAME);
    }
    static getCrawlerLastRunDate() {
//      return db.data.statistics[0];
      return this.getStatistics().last().value();
    }
    static add(parameters) {
        let statistics = this.create(parameters);
        this.getStatistics()
            .push(statistics)
            .write();
        return statistics;
    }
}

module.exports = Statistics;