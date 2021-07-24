const HTMLConfigPage = require('../html/HTMLConfigPage.js');

const list = [
    {id: "widevine", link: 'https://www.widevine.com/news', parser: HTMLConfigPage, prettyName: "Widevine", itemsConfig: {selector: '.col-md-4 .content'}, titleConfig: {selector: 'h2'}, dateConfig: {selector: '.post-details'}, linkConfig: {}},
];

module.exports = list;