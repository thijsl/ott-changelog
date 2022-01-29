const HTMLPage = require('../html/HTMLPage.js');

class SafariTechnologyPreviewReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.apple.com/safari/technology-preview/release-notes/
    parse() {
        let divs = this.document.body.querySelectorAll('h3');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let article = {
                title: (divs[i].innerHTML),
                link: this.url,
                date: new Date(),
                notes: null,
                id: divs[i].innerHTML
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = SafariTechnologyPreviewReleaseNotesList;