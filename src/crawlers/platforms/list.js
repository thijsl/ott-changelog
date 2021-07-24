const HTMLGooglePage = require('../html/HTMLGooglePage.js');
const fireTVDocumentationChanges = require('./FireTVDocumentationChanges.js');
const googleCastReleases = require('./GoogleCastReleaseNotesList.js');
const AppleOSReleaseNotesList = require('./AppleOSReleaseNotesList.js');
const rokuReleases = require('./RokuReleaseNotesList.js');
const SamsungTv = require('./SamsungTizenTV.js');
const webosReleases = require('./WebOSTVSDKReleaseNotesList.js');

const list = [
    {id: "androidDevelopersBlog", link: 'https://android-developers.googleblog.com/', parser: HTMLGooglePage, prettyName: "Android"},
    {id: "fireTVDocumentationChanges", link: 'https://developer.amazon.com/docs/fire-tv/whats-new.html', parser: fireTVDocumentationChanges, prettyName: "Fire TV"},
    {id: "googleCastReleases", link: 'https://developers.google.com/cast/docs/release-notes', parser: googleCastReleases, prettyName: "Google Cast"},
    {id: "iosIpadReleases", link: 'https://developer.apple.com/documentation/ios_ipados_release_notes', parser: AppleOSReleaseNotesList, prettyName: "iOS iPadOS"},
    {id: "rokuReleases", link: 'https://developer.roku.com/en-gb/docs/developer-program/release-notes/roku-os-release-notes.md', parser: rokuReleases, querySelectorParam: '#roku-os-release-notes', prettyName: "Roku"},
    {id: "SamsungTv", link: 'https://developer.samsung.com/smarttv/develop/specifications/general-specifications.html', parser: SamsungTv, prettyName: "Samsung Tizen"},
    {id: "tvOSReleases", link: 'https://developer.apple.com/documentation/tvos_release_notes', parser: AppleOSReleaseNotesList, prettyName: "tvOS"},
    {id: "webosReleases", link: 'http://webostv.developer.lge.com/sdk/release-notes/', parser: webosReleases, prettyName: "LG webOS"},
];

module.exports = list;