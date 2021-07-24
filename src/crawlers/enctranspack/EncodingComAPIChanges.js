const HTMLPage = require('../html/HTMLPage.js');

class EncodingComAPIChanges extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://api.encoding.com/changelog
    parse() {
        let items = this.document.querySelectorAll('.post-title a');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let date = items[i].textContent.trim().split(" -")[0];
            let article = {
                title: date,
                date: new Date(date).getTime(),
                link: this.url + items[i].href.split("/changelog")[1]
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = EncodingComAPIChanges;