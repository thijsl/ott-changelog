const HTMLPage = require('../html/HTMLPage.js');

class SafariReleaseNotesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://developer.apple.com/documentation/safari_release_notes
    parse() {
        let tasks = JSON.parse(this.document.body.querySelectorAll("#bootstrap-data")[0].innerHTML).tasks;
        let articles = [];
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            for (let j = 0; j < task.symbols.length; j++) {
                let symbol = task.symbols[j];
                let article = {
                    title: symbol.title.content,
                    link: this.url.split("/documentation")[0] + "/" + symbol.paths[0],
                    date: Date.now(),
                    id: symbol.title.content
                };
                articles.push(article);
            }
        }
        return articles;
    }
}

module.exports = SafariReleaseNotesList;