const HTMLPage = require('../html/HTMLPage.js');

class GoogleWebUpdatesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.chrome.com/blog/
    parse() {
      let divs = this.document.body.querySelectorAll('.blog-card');
      let articles = [];
      for (let i = 0; i < divs.length; i++) {
        let title = divs[i].querySelector('h2 a').innerText;
        let link = divs[i].querySelector('h2 a').href;
        let date = null;
        if (divs[i].querySelector('time')) {
          date = divs[i].querySelector('time').innerText;
          date = new Date(date);
        }

        let article = {
            title: title,
            link: link,
            date: date
        };
            articles.push(article);
        }
        this.articles = articles;
        return articles;
    }

}

module.exports = GoogleWebUpdatesList;