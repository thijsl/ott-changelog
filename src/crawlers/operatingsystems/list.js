const nvidiaAndroidTv = require('./NvidiaAndroidTVReleaseNotes.js');
const ps4 = require('./Ps4UpdatesList.js');
const tizen = require('./TizenReleaseNotesList.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');
const xboxOne = require('./XboxOneUpdatesList.js');

const list = [
    {id: "nvidiaAndroidTv", link: 'https://shield.nvidia.com/support/nvidia-android-tv/release-notes/1', parser: nvidiaAndroidTv, prettyName: "NVIDIA Shield"},
    // {id: "ps4", link: 'https://www.playstation.com/en-us/support/system-updates/ps4/', parser: ps4, prettyName: "PS4"},
 //   {id: "tizen", link: 'https://developer.tizen.org/tizen/tizen/release-notes', parser: tizen, prettyName: "Tizen"},
    {id: "windows", link: 'https://blogs.windows.com/feed/', parser: MicrosoftXMLPage, prettyName: "Windows"},
    {id: "xboxOne", link: 'https://support.xbox.com/en-US/help/hardware-network/settings-updates/whats-new-xbox-one-system-updates', parser: xboxOne, prettyName: "Xbox One", querySelectorParam: ".expander-111"},
];

module.exports = list;