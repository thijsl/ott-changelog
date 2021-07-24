const HTMLPage = require('../html/HTMLPage.js');

class WebKitBlogArticle extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    parse(article) {
        article.date = new Date(this.document.body.querySelector('.date').innerHTML).getTime();
        return article;
    }

}

module.exports = WebKitBlogArticle;