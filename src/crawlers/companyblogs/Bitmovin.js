const HTMLPage = require('../html/HTMLPage.js');

class Bitmovin extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://bitmovin.com/blog/
    parse() {
        let items = this.document.querySelectorAll('article');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let article = {
                title: item.querySelector('h2 a').textContent.trim(),
                date: new Date(item.querySelector('.post-date').textContent.trim()),
                link: item.querySelector('h2 a').href
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = Bitmovin;