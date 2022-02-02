const HTMLPage = require('../html/HTMLPage.js');

class TizenReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.tizen.org/tizen/tizen/release-notes
    parse() {
        let releases = this.document.body.querySelectorAll('.is-active .is-active ul.docs-sidebar.depth-3rd li a');
        let articles = [];
        for (let i = 0; i < releases.length; i++) {
            let title = releases[i].textContent.trim();
            let date = title && title.split("(");
            let id;
            if (date.length > 1) {
                title = date[0].trim();
                date = new Date(date[1].split(")")[0]);
            } else {
                date = new Date();
                id = title;
            }
            let article = {
                title: title,
                link: releases[i].href,
                date: date,
                id: id
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = TizenReleaseNotesList;