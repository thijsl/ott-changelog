const HTMLPage = require('../html/HTMLPage.js');

class UnifiedStreamingReleases extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://docs.unified-streaming.com/release-notes/index.html
    parse() {
        let versions = this.document.querySelectorAll('a');
        let articles = [];
        for (let i = 0; i < versions.length; i++) {
            let line = versions[i].textContent.trim().split("(");
            if (line.length > 1) {
                let title = line[0].trim();
                let dateMatch = line[1].match(/\d\d\d\d-\d\d-\d\d/);
                if (dateMatch) {
                    let article = {
                        title: title,
                        date: new Date(dateMatch[0]).getTime(),
                        link: this.url + versions[i].href
                    };
                    articles.push(article);
                }
            }
        }
        return articles;
    }

}

module.exports = UnifiedStreamingReleases;