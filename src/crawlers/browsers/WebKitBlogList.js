const HTMLPage = require('../html/HTMLPage.js');

class WebKitBlogList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://webkit.org/blog/
    parse() {
        let divs = this.document.body.querySelectorAll('.post > a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let article = {
                title: divs[i].innerHTML,
                link: divs[i].href,
                id: divs[i].innerHTML,
                date: new Date()
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = WebKitBlogList;