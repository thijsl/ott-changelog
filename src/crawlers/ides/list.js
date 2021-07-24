const androidStudio = require('./AndroidStudioReleaseNotes.js');
const tizenStudio = require('./TizenStudioList.js');
const xcodeReleaseNotes = require('./XcodeReleaseNotesList.js');

const list = [
    {id: "androidStudio", link: 'https://developer.android.com/studio/releases', parser: androidStudio, prettyName: "Android Studio"},
    {id: "tizenStudio", link: 'https://developer.tizen.org/development/tizen-studio/download/release-notes', parser: tizenStudio, prettyName: "Tizen Studio"},
    {id: "xcodeReleaseNotes", link: 'https://developer.apple.com/documentation/xcode_release_notes', parser: xcodeReleaseNotes, prettyName: "Xcode"}
];

module.exports = list;