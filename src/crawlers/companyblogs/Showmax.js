const GithubXMLPage = require('../xml/GithubXMLPage.js');

class Showmax extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://tech.showmax.com/feed.xml
    parse() {
        return super.parse();
    }

}

module.exports = Showmax;