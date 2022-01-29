const HTMLPage = require('./HTMLPage.js');

class HTMLGooglePage extends HTMLPage {

    constructor(url,content) {
        content.html = "<!DOCTYPE html><title></title><body>"+(content.html.split("\<body\>")[1]);
        super(url, content);
    }

    parse() {
        let divs = this.document.body.querySelectorAll('.post');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let article = {
                title: divs[i].querySelector('.title > a').textContent.trim(),
                link: divs[i].querySelector('.title > a').href,
                date: new Date(divs[i].querySelector('.publishdate').textContent.trim())
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = HTMLGooglePage;