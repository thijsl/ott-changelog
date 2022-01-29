const HTMLPage = require('../html/HTMLPage.js');

class RadiantMediaPlayerReleasesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.radiantmediaplayer.com/version-history.html
    parse() {
        var releases = this.document.body.getElementsByTagName('h3');
        var articles = [];
        for (var i = 0; i < releases.length; i++) {
            let release = releases[i];
            let date = release.getElementsByTagName('small')[0];
            let id;
            if (date) {
                date = date.innerHTML
            } else {
                date = new Date();
                id = release[0];
            }
            release = release.innerHTML.split(" - ");
            if (releases[i].getAttribute("id")) {
                var article = {
                    id: id,
                    title: release[0],
                    link: this.url + "#" + releases[i].getAttribute("id"),
                    date: new Date(date)
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = RadiantMediaPlayerReleasesList;