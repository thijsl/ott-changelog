const HTMLPage = require('../html/HTMLPage.js');

class JwPlayerReleasesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.jwplayer.com/release-notes/
    parse() {
        const products = this.document.body.getElementsByClassName('product-release');
        const articles = [];
        for (let i = 0; i < products.length; i++) {
            const versions = products[i].getElementsByClassName('version-patch');
            for (let j = 0; j < versions.length; j++) {
                let id;
                let date = versions[j].parentNode.getElementsByClassName('release-date');
                if (date && date[0] && date[0].innerHTML) {
                    date = new Date(date[0].innerHTML.split(": ")[1]);
                } else {
                    date = new Date();
                    id = date;
                }
                const article = {
                    title: versions[j].getElementsByTagName("h2")[0].innerHTML,
                    date: date,
                    link: "https://releases.jwplayer.com" + products[i].getElementsByTagName('a')[0].href,
                    notes: null,
                    id: id
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = JwPlayerReleasesList;