const androidStudio = require('./AndroidStudioReleaseNotes.js');
const tizenStudio = require('./TizenStudioList.js');
const xcodeReleaseNotes = require('./XcodeReleaseNotesList.js');

const list = [
    {id: "androidStudio", link: 'https://developer.android.com/studio/releases', parser: androidStudio, prettyName: "Android Studio"},
    {id: "tizenStudio", link: 'https://docs.tizen.org/application/tizen-studio/release-notes/release-notes/', parser: tizenStudio, prettyName: "Tizen Studio"},
    {id: "xcodeReleaseNotes", link: 'https://developer.apple.com/tutorials/data/documentation/xcode-release-notes.json', parser: xcodeReleaseNotes, prettyName: "Xcode"}
];

module.exports = list;