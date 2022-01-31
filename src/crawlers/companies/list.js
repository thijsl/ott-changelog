const dashIF = require('./DashIF.js');
const GithubXMLPage = require('../xml/GithubXMLPage');
const MozillaList = require('./MozillaList.js');

const list = [
    {id: "dashIF", link: 'https://dashif.org/news/', parser: dashIF, prettyName: "Dash IF"},
    {id: "googleDevelopersBlog", link: 'https://www.blogger.com/feeds/596098824972435195/posts/default', parser: GithubXMLPage, prettyName: "Google Developers Blog"},
    {id: "mozillaBlog", link: 'https://blog.mozilla.org/feed/', parser: MozillaList, prettyName: "Mozilla Blog"},
    {id: "mozillaHacks", link: 'https://hacks.mozilla.org/feed/', parser: MozillaList, prettyName: "Mozilla Hacks"},
];

module.exports = list;