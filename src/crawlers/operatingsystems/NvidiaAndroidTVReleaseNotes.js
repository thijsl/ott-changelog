const HTMLPage = require('../html/HTMLPage.js');

class NvidiaAndroidTVReleaseNotes extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://shield.nvidia.com/support/nvidia-android-tv/release-notes/1
    parse(url, content) {
        let divs = this.document.body.querySelectorAll('.button');
        let articles = [];
        for (var i = 0; i < divs.length; i++) {
            var title = divs[i].querySelector('.title');
            if (title) {
                let article = {
                    title: (title.textContent.trim()),
                    link: this.url,
                    date: new Date(((divs[i].querySelector('.date') && divs[i].querySelector('.date').textContent.trim())))
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = NvidiaAndroidTVReleaseNotes;