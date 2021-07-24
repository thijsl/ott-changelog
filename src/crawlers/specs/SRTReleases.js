const GithubXMLPage = require('../xml/GithubXMLPage.js');

class SRTReleases extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/Haivision/srt/releases.atom
    parse() {
        return super.parse();
    }

}

module.exports = SRTReleases;