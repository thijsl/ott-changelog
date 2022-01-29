const HTMLPage = require('../html/HTMLPage.js');

class Ps4UpdatesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.playstation.com/en-us/support/system-updates/ps4/
    parse() {
        let title = this.document.body.querySelector('.copy-title__text--center h2').innerHTML.trim().split(" ");
        let articles = [
            {
                title: title[title.length-1],
                date: new Date(this.document.body.querySelector('p').textContent.split(".")[0].split("on ")[1]),
                link: this.url
            }
        ];
        return articles;
    }

}

module.exports = Ps4UpdatesList;