const HTMLPage = require('../html/HTMLPage.js');

class GoogleWebUpdatesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developers.google.com/web/updates/
    parse() {
        let divs = this.document.body.querySelectorAll('.devsite-landing-row-item-body > a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let title = divs[i].querySelector('h3').innerHTML.trim();
            let date = divs[i].href.split("updates/")[1].split("/");
            date = new Date(date[0]+"/"+date[1]).getTime();
            if (isNaN(date)) {
                date = Date.now();
            }
            let article = {
                title: title,
                link: this.url.split("/web/updates/")[0] + divs[i].href,
                date: date
            };
            articles.push(article);
        }
        this.articles = articles;
        return articles;
    }

}

module.exports = GoogleWebUpdatesList;