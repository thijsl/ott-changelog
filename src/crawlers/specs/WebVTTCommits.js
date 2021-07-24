const GithubXMLPage = require('../xml/GithubXMLPage.js');

class WebVTTCommits extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/w3c/webvtt/commits/gh-pages.atom
    parse() {
        return super.parse();
    }

}

module.exports = WebVTTCommits;

