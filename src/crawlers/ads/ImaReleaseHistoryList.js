const HTMLPage = require('../html/HTMLPage.js');

class ImaReleaseHistoryList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developers.google.com/interactive-media-ads/docs/sdks/android/v3/history
    parse() {
        let divs = this.document.body.querySelectorAll('tr');
        let articles = [];
        for (let i = 1; i < divs.length; i++) {
            let columns = divs[i].querySelectorAll('td');
            if (columns.length > 0) {
                let notes2 = columns[2].querySelectorAll('li');
                let notes = [];
                for (let j = 0; j < notes2.length; j++) {
                    notes.push(notes2[j].textContent.trim());
                }
                let article = {
                    title: columns[0].textContent.trim(),
                    link: this.url,
                    date: new Date(columns[1].textContent.trim()),
                    notes: null
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = ImaReleaseHistoryList;