const GithubXMLPage = require('../xml/GithubXMLPage.js');

class MediaSessionCommits extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/w3c/mediasession/commits/master.atom
    parse() {
        return super.parse();
    }

}

module.exports = MediaSessionCommits;

