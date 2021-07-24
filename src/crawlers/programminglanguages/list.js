const swiftBlog = require('./SwiftBlogList.js');
const GithubXMLPage = require('../xml/GithubXMLPage.js');
const HTMLConfigPage = require('../html/HTMLConfigPage.js');

const list = [
    {id: "kotlin", link: 'https://github.com/JetBrains/kotlin/commits/master/ChangeLog.md.atom', parser: GithubXMLPage, prettyName: "Kotlin"},
    {id: "typeScript", link: 'https://github.com/microsoft/TypeScript/releases.atom', parser: GithubXMLPage, prettyName: "TypeScript"},
    // {id: "swiftBlog", link: 'https://swift.org/blog/', parser: swiftBlog, prettyName: "Swift"},
    {id: "swiftBlog", link: 'https://swift.org/blog/', parser: HTMLConfigPage, prettyName: "Swift", itemsConfig: {selector: 'article'}, titleConfig: {selector: 'a'}, dateConfig: {selector: 'time'}, linkConfig: {selector: 'a', splitConfig: {value: "/blog/", index: 1}}},

];

module.exports = list;