const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

class Facebook extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://engineering.fb.com/feed/
    parse() {
        return super.parse();
    }

}

module.exports = Facebook;