const nvidiaAndroidTv = require('./NvidiaAndroidTVReleaseNotes.js');
const ps4 = require('./Ps4UpdatesList.js');
const tizen = require('./TizenReleaseNotesList.js');
const MicrosoftXMLPage = require('../xml/MicrosoftXMLPage.js');
const xboxOne = require('./XboxOneUpdatesList.js');

const list = [
    {id: "nvidiaAndroidTv", link: 'https://www.nvidia.com/en-us/shield/software-update/', parser: nvidiaAndroidTv, prettyName: "NVIDIA Shield"},
    // {id: "ps4", link: 'https://www.playstation.com/en-us/support/system-updates/ps4/', parser: ps4, prettyName: "PS4"},
   {id: "tizen", link: 'https://docs.tizen.org/application/tizen-studio/release-notes/4-5-1-release-notes/', parser: tizen, prettyName: "Tizen"},
    {id: "windows", link: 'https://blogs.windows.com/feed/', parser: MicrosoftXMLPage, prettyName: "Windows"},
    {id: "xboxOne", link: 'https://support.xbox.com/en-US/help/hardware-network/settings-updates/whats-new-xbox-one-system-updates', parser: xboxOne, prettyName: "Xbox One", querySelectorParam: ".expander-169"},
];

module.exports = list;