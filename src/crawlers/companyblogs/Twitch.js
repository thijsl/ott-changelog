const HTMLPage = require('../html/HTMLPage.js');

class Twitch extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://blog.twitch.tv/en/tags/engineering
    parse() {
        let date = this.document.querySelector('h2 a').href.split("/");
        date = date[2] + "/" + date[3] + "/" + date[4];
        let articles = [
            {
                title: this.document.querySelector('h2 a').textContent.trim(),
                date: new Date(date),
                link: "https://blog.twitch.tv" + this.document.querySelector('h2 a').href
            }
        ];
        let items = this.document.querySelectorAll('.c-card-post__inner');
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            date = item.querySelector('h3 a').href.split("/");
            date = date[2] + "/" + date[3] + "/" + date[4];
            let article = {
                title: item.querySelector('h3 a').textContent.trim(),
                date: new Date(date),
                link: "https://blog.twitch.tv" + item.querySelector('h3 a').href
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = Twitch;