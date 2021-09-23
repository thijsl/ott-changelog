//const HTMLGooglePage = require('../html/HTMLGooglePage.js');
const FirefoxReleaseNotesList = require('./FirefoxReleaseNotesList.js');
const googleWebUpdates = require('./GoogleWebUpdatesList.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');
const safariReleaseNotes = require('./SafariReleaseNotesList.js');
//const safariTechnologyPreviewReleaseNotes = require('./SafariTechnologyPreviewReleaseNotesList.js');
const webKitBlog = require('./WebKitBlogList.js');
const webKitBlogArticle = require('./WebKitBlogArticle.js');
const mozillaList = require('../companies/MozillaList');

const list = [
    {id: "chromiumBlog", link: 'http://blog.chromium.org/atom.xml', parser: GithubXMLPage, prettyName: "Chromium", userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'},
    {id: "firefoxBeta", link: 'https://www.mozilla.org/en-US/firefox/developer/notes/', parser: FirefoxReleaseNotesList, prettyName: "Firefox Beta"},
    {id: "firefoxNightly", link: 'https://www.mozilla.org/en-US/firefox/nightly/notes/', parser: FirefoxReleaseNotesList, prettyName: "Firefox Nightly"},
    {id: "firefoxNightlyNews", link: 'https://blog.nightly.mozilla.org/feed/', parser: mozillaList, prettyName: "Firefox Nightly News"},
    {id: "googleWebUpdates", link: 'https://developer.chrome.com/blog/', parser: googleWebUpdates, prettyName: "Chrome Developers Blog"},
    {id: "edgeBlog", link: 'https://blogs.windows.com/msedgedev/feed/', parser: MicrosoftXMLPage, prettyName: "Edge"},
    {id: "safariReleaseNotes", link: 'https://developer.apple.com/tutorials/data/documentation/safari-release-notes.json', parser: safariReleaseNotes, prettyName: "Safari"},
//    {id: "safariTechnologyPreviewReleaseNotes", link: 'https://developer.apple.com/safari/technology-preview/release-notes/', parser: safariTechnologyPreviewReleaseNotes, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'}, // part of webkitblog
    {id: "webKitBlog", link: 'https://webkit.org/blog/', parser: webKitBlog, children: webKitBlogArticle, prettyName: "WebKit"}
];

module.exports = list;