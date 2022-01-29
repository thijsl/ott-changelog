const HTMLPage = require('../html/HTMLPage.js');

class TizenStudioList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://docs.tizen.org/application/tizen-studio/release-notes/release-notes/
    parse() {
      let articles = [];
      let title = this.document.body.querySelectorAll('.markdown-body h1')[0].textContent;
      let dateText = this.document.body.querySelectorAll('.markdown-body li')[0].textContent.split(":")[1];
      let date = new Date(dateText);
      let article = {
        title: title,
        link: this.url,
        date: date
      };
      articles.push(article);
      return articles;
    }

}

module.exports = TizenStudioList;