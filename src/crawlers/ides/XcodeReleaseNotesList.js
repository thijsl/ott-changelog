const HTMLPage = require('../html/HTMLPage.js');

class XcodeReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.apple.com/documentation/xcode_release_notes
    parse() {
        let divs = this.document.body.querySelectorAll('.task-topic-info a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let title = divs[i].textContent.split("Article");
            if (title.length > 1) {
                title = title[1];
                let article = {
                    title: title,
                    link: this.url + "/" + divs[i].href.split("/")[3],
                    date: Date.now(),
                    id: title
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = XcodeReleaseNotesList;