const HTMLGooglePage = require('../html/HTMLGooglePage.js');

class AndroidDevelopersBlogList extends HTMLGooglePage {

    constructor(url, content) {
        super(url, content);
    }

    // https://android-developers.googleblog.com/
    parse(url, content) {
        return super.parse();
    }

}

module.exports = AndroidDevelopersBlogList;