const HTMLPage = require('../html/HTMLPage.js');

class NvidiaAndroidTVReleaseNotes extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://shield.nvidia.com/support/nvidia-android-tv/release-notes/1
    parse(url, content) {
        let divs = this.document.body.querySelectorAll('.main-content h2');
        let articles = [];
        for (var i = 0; i < divs.length; i++) {
            var title = divs[i].textContent;
            if (title) {
                let article = {
                    title: title,
                    link: this.url,
                    date: new Date()
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = NvidiaAndroidTVReleaseNotes;