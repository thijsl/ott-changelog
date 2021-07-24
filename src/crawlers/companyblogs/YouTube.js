const GithubXMLPage = require('../xml/GithubXMLPage.js');

class YouTube extends GithubXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.blogger.com/feeds/1109038746813902833/posts/default
    parse() {
        return super.parse();
    }

}

module.exports = YouTube;