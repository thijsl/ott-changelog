const HTMLPage = require('../html/HTMLPage.js');

class BitmovinReleasesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://bitmovin.com/docs/player/releases/android
    parse() {
        let data = this.document.body.outerHTML.split("NEXT_DATA__ = ");
        let articles = [];
        if (data.length > 1) {
            data = data[1].split(";__NEXT_LO");
            if (data.length > 1) {
                data = data[0];
                data = JSON.parse(data);
                data = data.props.pageProps.paginatedReleases.entries;
            }
        }
        for (let i = 0; i < data.length; i++) {
            let entry = data[i];
            const article = {
                title: entry.title,
                link: this.url + "/" + entry.slug,
                date: new Date(entry.availableFrom)
            };
            articles.push(article);
        }
        return articles;
    }

}

module.exports = BitmovinReleasesList;