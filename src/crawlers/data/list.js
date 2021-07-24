const GithubXMLPage = require('../xml/GithubXMLPage.js');

const list = [
    {id: "convivaSdk", link: 'https://github.com/Conviva/ConvivaSDK/releases.atom', parser: GithubXMLPage, prettyName: "Conviva SDK"},
    {id: "vmaf", link: 'https://github.com/Netflix/vmaf/releases.atom', parser: GithubXMLPage, prettyName: "VMAF"},
];

module.exports = list;