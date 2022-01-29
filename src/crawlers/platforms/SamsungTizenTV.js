const HTMLPage = require('../html/HTMLPage.js');

class SamsungTizenTV extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.samsung.com/smarttv/develop/specifications/general-specifications.html
    parse() {
        let title = this.document.querySelectorAll('table tr th')[1].textContent.trim();
        let article = {
            title: title,
            date: new Date(),
            id: title,
            link: this.url
        };
        return [article];
    }

}

module.exports = SamsungTizenTV;