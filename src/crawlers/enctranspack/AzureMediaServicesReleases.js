const HTMLPage = require('../html/HTMLPage.js');
const moment = require('moment');

class AzureMediaServicesReleases extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://docs.microsoft.com/en-us/azure/media-services/latest/release-notes
    parse() {
        let dates = this.document.querySelectorAll('main h2');
        let articles = [];
        for (let i = 0; i < dates.length; i++) {
            let isDate = new Date(dates[i].textContent.trim().split(" -")[0]);
            if (isDate != 'Invalid Date') {
                let article = {
                    title: moment(isDate).format("MMMM YYYY"),
                    date: isDate,
                    link: this.url
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = AzureMediaServicesReleases;