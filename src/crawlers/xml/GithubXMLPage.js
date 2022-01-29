const XMLPage = require('./XMLPage.js');

class GithubXMLPage extends XMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/Dash-Industry-Forum/dash.js/releases.atom
    parse() {
        let items = this.document.getElementsByTagName('entry');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let date = ((items[i].getElementsByTagName('published') && items[i].getElementsByTagName('published')[0]) || (items[i].getElementsByTagName('updated') && items[i].getElementsByTagName('updated')[0])).textContent.trim();
            let article = {
                title: items[i].getElementsByTagName('title')[0].textContent.trim(),
                link: items[i].getElementsByTagName('link')[0].getAttribute('href'),
                date: new Date(date)
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = GithubXMLPage;