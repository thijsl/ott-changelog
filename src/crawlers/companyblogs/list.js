const bitmovin = require('./Bitmovin.js');
const HTMLConfigPage = require('../html/HTMLConfigPage.js');
const theoplayer = require('./THEOplayer.js');
const twitch = require('./Twitch.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');
const MediumXMLPage = require('../xml/MediumXMLPage.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');

const list = [
    {id: "awesomeVideo", link: 'https://github.com/krzemienski/awesome-video/commits/master.atom', parser: GithubXMLPage, prettyName: "Awesome Video"},
    {id: "awsMedia", link: 'https://aws.amazon.com/blogs/media/feed/', parser: MediumXMLPage, prettyName: "AWS Media"},
    {id: "bbc", link: 'https://medium.com/feed/bbc-design-engineering', parser: MediumXMLPage, prettyName: "BBC"},
    {id: "bitmovin", link: 'https://bitmovin.com/blog/', parser: bitmovin, prettyName: "Bitmovin"},
    {id: "crunchyroll", link: 'https://medium.com/feed/crunchyroll', parser: MediumXMLPage, prettyName: "Crunchyroll"},
    {id: "dazn", link: 'https://medium.com/feed/dazn-tech', parser: MediumXMLPage, prettyName: "DAZN"},
    {id: "dailymotion", link: 'https://medium.com/feed/dailymotion', parser: MediumXMLPage, prettyName: "Dailymotion"},
    {id: "disney", link: 'https://medium.com/feed/disney-streaming', parser: MediumXMLPage, prettyName: "Disney Streaming Services"},
    {id: "Eyevinn Technology", link: 'https://medium.com/feed/@eyevinntechnology', parser: MediumXMLPage, prettyName: "Eyevinn Technology"},
    {id: "facebook", link: 'https://engineering.fb.com/feed/', parser: MicrosoftXMLPage, prettyName: "Facebook"},
    {id: "fame", link: 'https://websites.fraunhofer.de/video-dev/feed/', parser: MicrosoftXMLPage, prettyName: "FAME"},
    {id: "hotstar", link: 'https://blog.hotstar.com/feed', parser: MediumXMLPage, prettyName: "Hotstar"},
    {id: "hulu", link: 'https://medium.com/feed/hulu-tech-blog', parser: MediumXMLPage, prettyName: "Hulu"},
    {id: "jwplayer", link: 'https://www.jwplayer.com/blog/rss.xml', parser: MicrosoftXMLPage, prettyName: "JW Player", itemsConfig: {selector: '.resource-list-card'}, titleConfig: {selector: '.title'}, dateConfig: {selector: '.post-date', attribute: 'datetime'}, linkConfig: {splitConfig: {value: "/blog/", index: 1}}},
    {id: "kaySingh", link: 'https://www.singhkays.com/blog/index.xml', parser: MicrosoftXMLPage, prettyName: "Kay Singh"},
    {id: "mux", link: 'https://mux.com/blog/rss', parser: MediumXMLPage, prettyName: "Mux"},
    {id: "netflix", link: 'https://netflixtechblog.com/feed', parser: MediumXMLPage, prettyName: "Netflix"},
    {id: "rokuBlog", link: 'https://blog.roku.com/feed/tag/UK', parser: MediumXMLPage, prettyName: "Roku"},
    {id: "showmax", link: 'https://tech.showmax.com/feed.xml', parser: GithubXMLPage, prettyName: "Showmax"},
    {id: "theoplayerBlog", link: 'https://www.theoplayer.com/blog/rss.xml', parser: theoplayer, prettyName: "THEOplayer"},
    {id: "twitch", link: 'https://blog.twitch.tv/en/tags/engineering', parser: twitch, prettyName: "Twitch"},
    {id: "vimeo", link: 'https://medium.com/feed/vimeo-engineering-blog', parser: MediumXMLPage, prettyName: "Vimeo"},
    {id: "youtube", link: 'https://www.blogger.com/feeds/1109038746813902833/posts/default', parser: GithubXMLPage, prettyName: "YouTube"},
    {id: "zattoo", link: 'https://medium.com/feed/zattoo_tech', parser: MediumXMLPage, prettyName: "Zattoo"},
];

module.exports = list;