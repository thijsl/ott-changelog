const GithubXMLPage = require('../xml/GithubXMLPage.js');

class PictureInPictureCommits extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/w3c/picture-in-picture/commits/master.atom
    parse() {
        return super.parse();
    }

}

module.exports = PictureInPictureCommits;

