const HTMLPage = require('../html/HTMLPage.js');

class XboxOneUpdatesList extends HTMLPage {

    constructor(url, content) {
        super(url, content);
    }

    // https://support.xbox.com/en-US/help/hardware-network/settings-updates/whats-new-xbox-one-system-updates
    parse() {
        let versions = this.document.body.querySelectorAll('.expander-103');
        let articles = [];

        for (let i = 0; i < versions.length; i++) {
            let version = versions[i].querySelectorAll('.ms-ExpanderHeader-title');
            let date = version[0].textContent;
            if (date.indexOf(" date") > -1) {
                let article = {
                    title: version[1].textContent,
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