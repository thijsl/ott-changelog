const MicrosoftXMLPage = require('./MicrosoftXMLPage.js');

class MediumXMLPage extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://medium.com/feed/crunchyroll
    parse() {
        return super.parse();
    }

}

module.exports = MediumXMLPage;