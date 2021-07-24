const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

class MuxBlog extends MicrosoftXMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://mux.com/blog/rss
    parse() {
        return super.parse();
    }

}

module.exports = MuxBlog;