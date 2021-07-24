const azureMediaServices = require('./AzureMediaServicesReleases.js');
const BitmovinReleasesList = require('../players/BitmovinReleasesList');
const encodingCom = require('./EncodingComAPIChanges.js');
const unifiedStreaming = require('./UnifiedStreamingReleases.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');
const HTMLConfigPage = require('../html/HTMLConfigPage.js');

const list = [
    {id: "awsMediaPackage", link: 'https://docs.aws.amazon.com/mediapackage/latest/ug/aws-elemental-mediapackage-release-notes.rss', parser: MicrosoftXMLPage, prettyName: "AWS MediaPackage"},
    {id: "awsMediaTailor", link: 'https://docs.aws.amazon.com/mediatailor/latest/ug/aws-elemental-mediatailor-release-notes.rss', parser: MicrosoftXMLPage, prettyName: "AWS MediaTailor"},
    {id: "azureMediaServices", link: 'https://docs.microsoft.com/en-us/azure/media-services/latest/release-notes', parser: azureMediaServices, prettyName: "Azure Media Services"},
    {id: "bento4", link: 'https://github.com/axiomatic-systems/Bento4/releases.atom', parser: GithubXMLPage, prettyName: "Bento4"},
    {id: "bitmovinEncoder", link: 'https://bitmovin.com/docs/encoding/releases/encoder', parser: BitmovinReleasesList, prettyName: "Bitmovin Encoder"},
    {id: "dav1d", link: 'https://github.com/videolan/dav1d/releases.atom', parser: GithubXMLPage, prettyName: "dav1d"},
    // // {id: "encodingCom", link: 'https://api.encoding.com/changelog', parser: encodingCom, prettyName: "Encoding.com"},
    // {id: "encodingCom", link: 'https://api.encoding.com/page/release-notes', parser: HTMLConfigPage, prettyName: "Encoding.com", itemsConfig: {selector: '.post-title a'}, titleConfig: {splitConfig: {value: " -", index: 0}}, dateConfig: {splitConfig: {value: " -", index: 0}}, linkConfig: {splitConfig: {value: "/page/release-notes", index: 1}}},
    {id: "ffmpeg", link: 'https://github.com/FFmpeg/FFmpeg/releases.atom', parser: GithubXMLPage, prettyName: "FFmpeg"},
    {id: "gpac", link: 'https://github.com/gpac/gpac/releases.atom', parser: GithubXMLPage, prettyName: "GPAC"},
    {id: "rav1e", link: 'https://github.com/xiph/rav1e/releases.atom', parser: GithubXMLPage, prettyName: "rav1e"},
    {id: "shakaPackager", link: 'https://github.com/google/shaka-packager/releases.atom', parser: GithubXMLPage, prettyName: "Shaka Packager"},
    {id: "svtav1", link: 'https://github.com/OpenVisualCloud/SVT-AV1/releases.atom', parser: GithubXMLPage, prettyName: "SVT-AV1"},
    {id: "unifiedStreaming", link: 'https://docs.unified-streaming.com/release-notes/', parser: unifiedStreaming, prettyName: "Unified Streaming"},
    {id: "verizonMediaPlatform", link: 'https://cms.uplynk.com/newsitems?format=atom', parser: GithubXMLPage, prettyName: "Verizon Media Platform"},
];

module.exports = list;