const HTMLPage = require('../html/HTMLPage.js');

class RokuReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.roku.com/en-gb/docs/developer-program/release-notes/roku-os-release-notes.md
    parse() {
        let versions = this.document.body.querySelectorAll('h2');
        let dates2 = this.document.body.querySelectorAll('p strong');
        let dates = [0];
        for (let i = 0; i < dates2.length; i++) {
            if (dates2[i].textContent.indexOf(" date") > -1) {
                let date4 = dates2[i].parentNode.textContent.split("date: ")[1];
                dates.push(new Date(date4).getTime());
            }
        }
        let articles = [];
        for (let i = 1; i < versions.length; i++) {
            let version = versions[i];
            if (version) {
                let article = {
                    title: version.textContent.trim(),
                    link: this.url,
                    date: dates[i]
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = RokuReleaseNotesList;