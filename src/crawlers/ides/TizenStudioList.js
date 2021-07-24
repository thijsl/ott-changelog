const HTMLPage = require('../html/HTMLPage.js');

class TizenStudioList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.tizen.org/development/tizen-studio/download/release-notes
    parse() {
        let divs = this.document.body.querySelectorAll('.expanded .td-data-lnb a');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let title = divs[i].innerHTML;
            let date = divs[i].innerHTML.split("(");
            if (date.length > 1) {
                title = date[0].trim();
                date = date[1].split(")")[0];
                date = new Date(date).getTime();
            } else {
                date = Date.now();
            }
            let article = {
                title: title,
                link: this.url.split("/development")[0] + divs[i].href,
                date: date
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = TizenStudioList;