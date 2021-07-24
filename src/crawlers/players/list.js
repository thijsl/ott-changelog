const azureMediaPlayer = require('./AzureMediaPlayerReleasesList');
const bitmovin = require('./BitmovinReleasesList');
const juvoPlayer = require('./JuvoPlayerReleaseNotesList.js');
const jwPlayer = require('./JwPlayerReleasesList.js');
const radiantMediaPlayer = require('./RadiantMediaPlayerReleasesList.js');
const theoplayer = require('./THEOplayerReleasesList.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');

const list = [
    {id: "azureMediaPlayer", link: 'https://amp.azure.net/libs/amp/latest/docs/changelog.html', parser: azureMediaPlayer, prettyName: "Azure Media Player"},
    {id: "bitmovinWeb", link: 'https://bitmovin.com/docs/player/releases/web', parser: bitmovin, prettyName: "Bitmovin Web"},
    {id: "bitmovinIOS", link: 'https://bitmovin.com/docs/player/releases/ios', parser: bitmovin, prettyName: "Bitmovin iOS"},
    {id: "bitmovinAndroid", link: 'https://bitmovin.com/docs/player/releases/android', parser: bitmovin, prettyName: "Bitmovin Android"},
    {id: "bitmovinRoku", link: 'https://bitmovin.com/docs/player/releases/roku', parser: bitmovin, prettyName: "Bitmovin Roku"},
    {id: "clappr", link: 'https://github.com/clappr/clappr/releases.atom', parser: GithubXMLPage, prettyName: "Clappr"},
    {id: "dashjs", link: 'https://github.com/Dash-Industry-Forum/dash.js/releases.atom', parser: GithubXMLPage, prettyName: "dash.js"},
    {id: "exoplayer", link: 'https://github.com/google/ExoPlayer/releases.atom', parser: GithubXMLPage, prettyName: "ExoPlayer"},
    {id: "flowplayer", link: 'https://github.com/flowplayer/flowplayer/releases.atom', parser: GithubXMLPage, prettyName: "Flowplayer"},
    {id: "hlsJs", link: 'https://github.com/video-dev/hls.js/releases.atom', parser: GithubXMLPage, prettyName: "hls.js"},
    {id: "juvoPlayer", link: 'https://github.com/SamsungDForum/JuvoPlayer', parser: juvoPlayer, prettyName: "JuvoPlayer"},
    {id: "jwPlayerAndroid", link: 'https://www.jwplayer.com/release-notes/android-sdk/', parser: jwPlayer, prettyName: "JW Player Android"},
    // {id: "jwPlayerFireTV", link: 'https://www.jwplayer.com/release-notes/fireos-sdk/', parser: jwPlayer, prettyName: "JW Player FireOS"},
    {id: "jwPlayerIOS", link: 'https://www.jwplayer.com/release-notes/ios-sdk/', parser: jwPlayer, prettyName: "JW Player iOS"},
    {id: "jwPlayerWeb", link: 'https://www.jwplayer.com/release-notes/jw-player/', parser: jwPlayer, prettyName: "JW Player Web"},
    {id: "mediaElementJs", link: 'https://github.com/mediaelement/mediaelement/releases.atom', parser: GithubXMLPage, prettyName: "MediaElementJs"},
    {id: "radiantMediaPlayer", link: 'https://www.radiantmediaplayer.com/version-history.html', parser: radiantMediaPlayer, prettyName: "Radiant Media Player"},
    {id: "reactNativeVideo", link: 'https://github.com/react-native-community/react-native-video/releases.atom', parser: GithubXMLPage, prettyName: "React Native Video"},
    {id: "shakaPlayer", link: 'https://github.com/google/shaka-player/releases.atom', parser: GithubXMLPage, prettyName: "Shaka Player"},
    {id: "theoplayer", link: 'https://docs.portal.theoplayer.com/changelog.md', parser: theoplayer, prettyName: "THEOplayer"},
    {id: "vhsVideoJs", link: 'https://github.com/videojs/http-streaming/releases.atom', parser: GithubXMLPage, prettyName: "VHS"},
    {id: "videoJs", link: 'https://github.com/videojs/video.js/releases.atom', parser: GithubXMLPage, prettyName: "Video.js"},
];

module.exports = list;