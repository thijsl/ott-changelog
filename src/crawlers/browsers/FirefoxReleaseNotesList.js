const HTMLPage = require('../html/HTMLPage.js');

class FirefoxReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.mozilla.org/en-US/firefox/nightly/notes/
    parse() {
        let title = this.document.body.querySelector('.c-release-version').innerHTML;
        let article = {
            title: title,
            link: "https://www.mozilla.org/en-US/firefox/"+title+"/releasenotes/",
            date: new Date(this.document.body.querySelector('.c-release-date').innerHTML).getTime()
        };
        return [article];
    }

}

module.exports = FirefoxReleaseNotesList;
