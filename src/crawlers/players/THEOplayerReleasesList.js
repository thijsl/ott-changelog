const HTMLPage = require('../html/HTMLPage.js');

class THEOplayerReleasesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://docs.portal.theoplayer.com/changelog.md
    parse() {
        let releases = this.document.body.querySelectorAll('.changelog h2');
        let articles = [];
        let date = new Date();
        let gotDate = false;
        for (let i = 0; i < releases.length; i++) {
            let release = releases[i].textContent;
            release = release.split("(");
            if (release.length > 1) {
                let date = release[1].split(")");
                release = release[0];
                if (date.length > 1) {
                    date = new Date(date[0]);
                    gotDate = true;
                } else {
                    date = new Date();
                }
                if (isNaN(date)) {
                    date = new Date();
                }
                let link = this.url + releases[i].querySelector('a').getAttribute("href");
                let article = {
                    title: release.replace("🚀", "").trim(),
                    link: link,
                    date: date,
                    notes: null
                };
                if (!gotDate) {
                    article.id = article.title;
                }
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = THEOplayerReleasesList;