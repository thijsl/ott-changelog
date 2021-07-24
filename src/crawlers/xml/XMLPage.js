const DOMParser = require('xmldom').DOMParser;

class XMLPage {

    constructor(url,content) {
        this.url = url;
        this.content = content;
        const xmlDoc = new DOMParser().parseFromString(content.text);
        this.document = xmlDoc;
    }

}

module.exports = XMLPage;