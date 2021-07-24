const HTMLPage = require('../html/HTMLPage.js');

class JuvoPlayerReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://github.com/SamsungDForum/JuvoPlayer
    parse() {
        var divs = this.document.body.getElementsByTagName('strong');
        var articles = [];
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].innerHTML.indexOf("JuvoPlayer ") > -1) {
                var article = {
                    title: divs[i].innerHTML,
                    link: this.url,
                    date: Date.now(),
                    id: divs[i].innerHTML
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = JuvoPlayerReleaseNotesList;