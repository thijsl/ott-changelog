const GithubXMLPage = require('../xml/GithubXMLPage.js');

class MediaSourceExtensionsCommits extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/w3c/media-source/commits/gh-pages.atom
    parse() {
        return super.parse();
    }

}

module.exports = MediaSourceExtensionsCommits;