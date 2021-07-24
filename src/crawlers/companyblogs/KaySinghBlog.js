const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

class KaySinghBlog extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://www.singhkays.com/blog/index.xml
    parse() {
        return super.parse();
    }

}

module.exports = KaySinghBlog;