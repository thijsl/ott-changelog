const dashIF = require('./DashIF.js');
const HTMLGooglePage = require('../html/HTMLGooglePage.js');
const MozillaList = require('./MozillaList.js');

const list = [
    {id: "dashIF", link: 'https://dashif.org/news/', parser: dashIF, prettyName: "Dash IF"},
    {id: "googleDevelopersBlog", link: 'https://developers.googleblog.com/', parser: HTMLGooglePage, prettyName: "Google Developers Blog"},
    {id: "mozillaBlog", link: 'https://blog.mozilla.org/feed/', parser: MozillaList, prettyName: "Mozilla Blog"},
    {id: "mozillaHacks", link: 'https://hacks.mozilla.org/feed/', parser: MozillaList, prettyName: "Mozilla Hacks"},
];

module.exports = list;