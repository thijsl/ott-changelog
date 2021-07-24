const HTMLPage = require('../html/HTMLPage.js');

class WebOSTVSDKReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // http://webostv.developer.lge.com/sdk/release-notes/
    parse() {
        let divs = this.document.body.querySelectorAll('dd .notesList a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let title = divs[i].textContent.split("(")[0];
            let date = divs[i].textContent.split("(");
            if (date.length > 1) {
                let article = {
                    title: title.trim(),
                    link: this.url,
                    date: new Date(date[1].split(")")[0]).getTime()
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = WebOSTVSDKReleaseNotesList;