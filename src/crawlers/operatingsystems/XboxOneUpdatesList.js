const HTMLPage = require('../html/HTMLPage.js');

class XboxOneUpdatesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://support.xbox.com/en-US/help/hardware-network/settings-updates/whats-new-xbox-one-system-updates
    parse() {
        let versions = this.document.body.querySelectorAll('.expander-104');
        let articles = [];
        for (let i = 0; i < versions.length; i++) {
            let date = versions[i].querySelectorAll('.ms-ExpanderHeader-title')[i].textContent;
            if (date.indexOf(" date") > -1) {
                let article = {
                    title: versions[i+1].textContent.trim(),
                    date: new Date(date.split(" ")[2]).getTime(),
                    link: this.url
                };
                articles.push(article);
            }
        }
        return articles;
    }

}

module.exports = XboxOneUpdatesList;