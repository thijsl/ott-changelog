const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

class THEOplayer extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.theoplayer.com/blog/rss.xml
    parse() {
        return super.parse();
    }

}

module.exports = THEOplayer;