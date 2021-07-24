const GithubXMLPage = require('../xml/GithubXMLPage.js');

const list = [
    {id: "flutter", link: 'https://github.com/flutter/flutter/releases.atom', parser: GithubXMLPage, prettyName: "Flutter"},
    {id: "reactNative", link: 'https://github.com/facebook/react-native/releases.atom', parser: GithubXMLPage, prettyName: "React Native"},
];

module.exports = list;