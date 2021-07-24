const HTMLPage = require('../html/HTMLPage.js');

class HLSSpec extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis
    parse() {
        const article = {
            title: this.document.querySelectorAll('pre h1')[1].textContent.trim(),
            link: "https://tools.ietf.org/html/"+this.document.querySelectorAll('.noprint a')[this.document.querySelectorAll('.noprint a').length-2].href.split('./')[1],
            date: Date.now(),
            id: this.document.querySelectorAll('pre h1')[1].textContent.trim()
        };
        return [article];
    }

}

module.exports = HLSSpec;