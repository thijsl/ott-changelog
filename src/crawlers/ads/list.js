const ima = require('./ImaReleaseHistoryList.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

const list = [
    {id: "iabTechLabBlog", link: 'https://iabtechlab.com/blog/feed/', parser: MicrosoftXMLPage, prettyName: "IAB Tech Lab"},
    {id: "imaAndroid", link: 'https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history', parser: ima, prettyName: "IMA Android"},
    {id: "imaHtml5", link: 'https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/history', parser: ima, prettyName: "IMA HTML5"},
    {id: "imaIOS", link: 'https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/history', parser: ima, prettyName: "IMA iOS"},
    {id: "prebidJs", link: 'https://github.com/prebid/Prebid.js/releases.atom', parser: GithubXMLPage, prettyName: "Prebid.js"},
    {id: "SIMID", link: 'https://github.com/InteractiveAdvertisingBureau/SIMID/commits/master.atom', parser: GithubXMLPage, prettyName: "SIMID"},
    {id: "VAST", link: 'https://github.com/InteractiveAdvertisingBureau/vast/releases.atom', parser: GithubXMLPage, prettyName: "VAST"},
];

module.exports = list;