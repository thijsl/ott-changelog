const HTMLPage = require('../html/HTMLPage.js');

class AndroidStudioReleaseNotes extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.android.com/studio/releases
    parse() {
        let divs = this.document.body.querySelectorAll('.devsite-article-body h2');
        let articles = [];
        for (let i = 0; i < divs.length; i++) {
            let title = divs[i].innerHTML;
            let date = divs[i].innerHTML.split("(");
            if (date.length > 1) {
                title = date[0].trim();
                date = date[1].split(")")[0]
            } else { continue; }
            let article = {
                title: title,
                link: this.url + "#" + divs[i].id,
                date: new Date(date)
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = AndroidStudioReleaseNotes;