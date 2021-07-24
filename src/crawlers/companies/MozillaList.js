const XMLPage = require('../xml/XMLPage.js');

class MozillaList extends XMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://blog.mozilla.org/feed/
    parse() {
        let items = this.document.getElementsByTagName('item');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let article = {
                title: items[i].getElementsByTagName('title')[0].textContent.trim(),
                link: items[i].getElementsByTagName('link')[0].textContent.trim(),
                date: new Date(items[i].getElementsByTagName('pubDate')[0].textContent.trim()).getTime()
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = MozillaList;

