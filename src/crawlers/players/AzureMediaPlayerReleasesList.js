const HTMLPage = require('../html/HTMLPage.js');

class AzureMediaPlayerReleasesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://amp.azure.net/libs/amp/latest/docs/changelog.html
    parse() {
        let articles = [];
        let releases = this.document.body.getElementsByTagName('h2');
        for (let i = 0; i < releases.length; i++) {
            let release = releases[i].innerHTML;
            let date = release.split("(");
            let id;
            if (date.length > 1) {
                release = date[0].substr(0, date[0].length-1);
                date = date[1].split(")");
                if (date.length > 1) {
                    date = new Date(date[0]);
                } else {
                    date = new Date();
                }
            } else {
                date = new Date();
            }
            if (isNaN(date)) {
                id = release;
                date = new Date();
            }
            let article = {
                title: release,
                link: this.url,
                date: date,
                notes: null,
                id: id
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = AzureMediaPlayerReleasesList;