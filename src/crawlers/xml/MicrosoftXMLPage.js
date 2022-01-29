const XMLPage = require('./XMLPage.js');

class MicrosoftXMLPage extends XMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://blogs.windows.com/msedgedev/feed/
    parse() {
        let items = this.document.getElementsByTagName('item');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let article = {
                title: items[i].getElementsByTagName('title')[0].textContent.trim(),
                link: items[i].getElementsByTagName('link')[0].textContent.trim(),
                date: new Date(items[i].getElementsByTagName('pubDate')[0].textContent.trim())
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = MicrosoftXMLPage;