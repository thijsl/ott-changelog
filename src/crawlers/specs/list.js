const hlsSpec = require('./HLSSpec.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');

const list = [
    {id: "av1Spec", link: 'https://github.com/AOMediaCodec/av1-spec/releases.atom', parser: GithubXMLPage, prettyName: "AV1 Specification"},
    {id: "hlsSpec", link: 'https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis', parser: hlsSpec, prettyName: "HLS"},
    {id: "mediaSession", link: 'https://github.com/w3c/mediasession/commits/master.atom', parser: GithubXMLPage, prettyName: "Media Session"},
    {id: "mediaSourceExtensions", link: 'https://github.com/w3c/media-source/commits/gh-pages.atom', parser: GithubXMLPage, prettyName: "Media Source Extensions"},
    {id: "encryptedMediaExtensions", link: 'https://github.com/w3c/encrypted-media/commits/master.atom', parser: GithubXMLPage, prettyName: "Encrpted Media Extensions"},
    {id: "pictureInPicture", link: 'https://github.com/w3c/picture-in-picture/commits/master.atom', parser: GithubXMLPage, prettyName: "Picture-in-Picture"},
    {id: "srt", link: 'https://github.com/Haivision/srt/releases.atom', parser: GithubXMLPage, prettyName: "SRT"},
    {id: "webVTT", link: 'https://github.com/w3c/webvtt/commits/gh-pages.atom', parser: GithubXMLPage, prettyName: "WebVTT"},
];

module.exports = list;