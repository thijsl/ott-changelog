const HTMLPage = require('../html/HTMLPage.js');

class JWPlayer extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.jwplayer.com/blog/
    parse2() {
        let items = this.document.querySelectorAll('.resource-list-card');
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let article = {
                title: item.querySelector('.title').textContent.trim(),
                date: new Date(item.querySelector('.post-date').getAttribute('datetime')),
                link: this.url + item.href.split("/blog/")[1]
            };
            articles.push(article);
        }
        return articles;
    }

    parse(itemsConfig, titleConfig, dateConfig, linkConfig) {
        let items = this.document.querySelectorAll(itemsConfig.selector);
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            // title
            let title = item.querySelector(titleConfig.selector);
            if (title) {
                title = title.textContent.trim();
            }

            // date
            let date = item.querySelector(dateConfig.selector);
            if (dateConfig.attribute) {
                date = date.getAttribute(dateConfig.attribute);
            } else {
                date = date.textContent.trim();
            }

            // link
            let link = item.href;
            console.log("link", link, linkConfig.splitConfig.value, linkConfig.splitConfig.index);
            if (!linkConfig.selector) {

            }
            if (linkConfig.splitConfig) {
                link = link.split(linkConfig.splitConfig.value)[linkConfig.splitConfig.index];
                console.log("new link", link);
            }
            if (linkConfig.addUrl) {
                link = this.url + link;
            }

            let article = {
                title: title,
                date: new Date(date),
                link: link
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = JWPlayer;