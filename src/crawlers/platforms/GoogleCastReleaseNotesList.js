const HTMLPage = require('../html/HTMLPage.js');

class GoogleCastReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developers.google.com/cast/docs/release-notes
    parse() {
        let divs = this.document.body.querySelectorAll('.devsite-article-body h3');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let date = new Date(divs[i].textContent).getTime();
            if (!isNaN(date)) {
                let article = {
                    title: divs[i].textContent.trim(),
                    date: date,
                    link: this.url +"#"+divs[i].textContent.replace(/ /g, "-").toLowerCase().trim()
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = GoogleCastReleaseNotesList;