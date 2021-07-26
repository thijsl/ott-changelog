const HTMLPage = require('../html/HTMLPage.js');

class HLSSpec extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis
    parse() {
        const article = {
            title: this.document.querySelectorAll('.h1')[1].textContent.trim(),
            link: this.document.querySelectorAll('.noprint a')[this.document.querySelectorAll('.noprint a').length-2].href,
            date: Date.now(),
            id: this.document.querySelectorAll('.h1')[1].textContent.trim()
        };
        return [article];
    }

}

module.exports = HLSSpec;