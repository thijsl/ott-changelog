const HTMLPage = require('../html/HTMLPage.js');

class DashIF extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://dashif.org/news/
    parse() {
        let items = this.document.querySelectorAll('.container p');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let line = items[i].textContent.split(" ");
            let title = line.slice(3, line.length).join(" ").trim().replace("– ", "");
            let article = {
                title: title,
                date: new Date(line[0] + " " + line[1] + " " + line[2]),
                link: this.url
            };
            articles.push(article);
        }
        return articles;
    }
}

module.exports = DashIF;