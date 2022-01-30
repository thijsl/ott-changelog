const mdTable = require('markdown-table');
const moment = require('moment');

class Markdown {

    static format(articles) {
        let list;
        try {
            list = require('../../crawlers/List.js');
            list = list.getList();
        }
        catch (e) {
            console.log(e)
        }

        let output = "";

        for (let i = 0; i < list.length; i++) {
            const category = list[i];
            const sources = this.getCategorySources(list, category.id);
            const formattedArticles = this.formatArticlesAsMarkdown(articles, sources);
            if (formattedArticles) {
                output = output + "\n# " + sources.categoryName + "\n";
                output = output + formattedArticles;
            }
        }

        return output;
    }

    static formatArticlesAsMarkdown(articles, sources) {
        let table = [["Source", "Date", "Item"]];
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let sourceIndexOf = sources.sourceIds.indexOf(article.sourceId);
            if (sourceIndexOf > -1) {
                let notes = "";
                if (article.notes && article.notes.length > 0) {
                    notes = " <ul>";
                    for (let j = 0; j < article.notes.length; j++) {
                        notes = notes + ` <li>${article.notes[j]}</li>`;
                    }
                    notes = notes + "</ul>";
                }
                let title = "[" + article.title + "](" + article.link + ")" + notes;
                let sourceTitle = "[" + sources.sourceNames[sourceIndexOf].name + "](" + sources.sourceNames[sourceIndexOf].link + ")";
                let row = [sourceTitle, moment(article.date).format("YYYY-MM-DD"), title];
                table.push(row);
            }
        }
        if (table.length == 1) {
            return false;
        } else {
            return mdTable(table);
        }
    }

    static getCategorySources(list, category) {
        let sourceIds = [];
        let sourceNames = [];
        let categoryName;
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            if (item.id == category) {
                categoryName = item.prettyName;
                const catList = item.list;
                for (let j = 0; j < catList.length; j++) {
                    let source = catList[j];
                    sourceIds.push(source.id);
                    sourceNames.push({name: source.prettyName, link: source.link});
                }
            }
        }
        return {sourceIds: sourceIds, sourceNames: sourceNames, categoryName: categoryName};
    }
}

module.exports = Markdown;