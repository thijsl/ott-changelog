const HTMLPage = require('../html/HTMLPage.js');

class AppleOSReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.apple.com/documentation/ios_ipados_release_notes
    parse() {
        let divs = this.document.body.querySelectorAll('.task-topic-info a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let link = divs[i].href;
            if (link.indexOf("http") == -1) {
                link = this.url + "/" + link.split("/")[3];
            }
            let title = divs[i].textContent.split("Article");
            if (title.length > 1) {
                title = title[1];
            } else {
                title = divs[i].textContent.trim();
            }
            let article = {
                title: title,
                link: link,
                date: Date.now(),
                id: title
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = AppleOSReleaseNotesList;