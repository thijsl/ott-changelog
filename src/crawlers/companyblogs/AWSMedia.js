const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

class AWSMedia extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://aws.amazon.com/blogs/media/feed/
    parse() {
        return super.parse();
    }

}

module.exports = AWSMedia;