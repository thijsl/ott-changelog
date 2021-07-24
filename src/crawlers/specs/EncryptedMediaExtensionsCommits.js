const GithubXMLPage = require('../xml/GithubXMLPage.js');

class EncryptedMediaExtensionsCommits extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/w3c/encrypted-media/commits/master.atom
    parse() {
        return super.parse();
    }

}

module.exports = EncryptedMediaExtensionsCommits;