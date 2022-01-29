const HTMLPage = require('../html/HTMLPage.js');

class SwiftBlogList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://swift.org/blog/
    parse() {
        let divs = this.document.body.querySelectorAll('article');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let article = {
                title: divs[i].querySelector('a').textContent.trim(),
                link: this.url.split("/blog/")[0] + divs[i].querySelector('a').href,
                date: new Date(divs[i].querySelector('time').textContent.trim())
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = SwiftBlogList;