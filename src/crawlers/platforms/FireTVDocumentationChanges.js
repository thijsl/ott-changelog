const HTMLPage = require('../html/HTMLPage.js');

class FireTVDocumentationChanges extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.amazon.com/docs/fire-tv/whats-new.html
    parse() {
        let items = this.document.querySelectorAll('.mainColumn table tr');
        let articles = [];
        for (let i = 1; i < items.length; i++) {
            let line = items[i].querySelectorAll('td');
            let title = "Update to " + line[1].textContent.trim();
            let notes = [line[2].textContent.trim()];
            let date = new Date(line[0].textContent.trim());
            let article = {
                title: title,
                date: date,
                link: this.url,
                notes: notes
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = FireTVDocumentationChanges;