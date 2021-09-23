const HTMLPage = require('../html/HTMLPage.js');

class XcodeReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.apple.com/documentation/xcode-release-notes
    // https://developer.apple.com/tutorials/data/documentation/xcode-release-notes.json

    parse() {
      let document = JSON.parse(this.content.text);
      let articles = [];

      for (let i = 0; i < document.topicSections.length; i++) {
          let tasks = document.topicSections[i];

          for (let j = 0; j < tasks.identifiers.length; j++) {
            let task = document.references[tasks.identifiers[j]];
            let article = {
              title: task.title,
              link: this.url.split("/tutorials")[0] + task.url,
              date: Date.now(),
              id: task.identifier
            };
            articles.push(article);
          }

      }
      return articles;
  }
}

module.exports = XcodeReleaseNotesList;