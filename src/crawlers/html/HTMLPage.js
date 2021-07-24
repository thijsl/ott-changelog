const jsdom = require("jsdom");
const {JSDOM} = jsdom;

class HTMLPage {

    constructor(url, content) {
        this.url = url;
        this.content = content;
        const dom = new JSDOM(content.html);
        this.document = dom.window.document;
    }

}

module.exports = HTMLPage;