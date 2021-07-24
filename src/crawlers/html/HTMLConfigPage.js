const HTMLPage = require('./HTMLPage.js');

class HTMLConfigPage extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    parse(itemsConfig, titleConfig, dateConfig, linkConfig) {
        let items = this.document.querySelectorAll(itemsConfig.selector);
        let articles = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // title
            let title = item;
            if (titleConfig.selector) {
                title = item.querySelector(titleConfig.selector);
            }
            if (titleConfig.attribute) {
                title = title.getAttribute(titleConfig.attribute);
            } else if (title) {
                title = title.textContent.trim();
            }
            if (titleConfig.splitConfig) {
                title = title.split(titleConfig.splitConfig.value)[titleConfig.splitConfig.index];
            }

            // date
            let date = item;
            if (dateConfig.selector) {
                date = item.querySelector(dateConfig.selector);
            }
            if (dateConfig.attribute) {
                date = date.getAttribute(dateConfig.attribute);
            } else if (date) {
                date = date.textContent.trim();
            }
            if (dateConfig.splitConfig) {
                date = date.split(dateConfig.splitConfig.value)[dateConfig.splitConfig.index];
            }

            // link
            let link = item;
            if (linkConfig.selector) {
                link = item.querySelector(linkConfig.selector);
            }
            if (link && link.tagName == "A") {
                link = link.href;
            }
            if (link && linkConfig.splitConfig) {
                link = link.split(linkConfig.splitConfig.value)[linkConfig.splitConfig.index];
                if (linkConfig.baseUrl) {
                    link = linkConfig.baseUrl + link;
                } else {
                    link = this.url + link;
                }
            }
            if (typeof link !== "string") {
                link = this.url;
            }
            if (title && date && link) {
                let article = {
                    title: title,
                    date: new Date(date).getTime(),
                    link: link
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = HTMLConfigPage;