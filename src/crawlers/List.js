const browsers = require('./browsers/list.js');
const companies = require('./companies/list.js');
const companyblogs = require('./companyblogs/list.js');
const contentprotection = require('./contentprotection/list.js');
const data = require('./data/list.js');
const enctranspack = require('./enctranspack/list.js');
const frameworks = require('./frameworks/list.js');
const ides = require('./ides/list.js');
const ads = require('./ads/list.js');
const operatingsystems = require('./operatingsystems/list.js');
const platforms = require('./platforms/list.js');
const players = require('./players/list.js');
const programminglanguages = require('./programminglanguages/list.js');
const specs = require('./specs/list.js');

class List {

    static getList() {
        return [
            {id: "browsers", list: browsers, prettyName: 'Browsers'},
            {id: "companies", list: companies, prettyName: 'Organizations'},
            {id: "companyblogs", list: companyblogs, prettyName: 'Company Blogs'},
            {id: "contentprotection", list: contentprotection, prettyName: 'Content Protection'},
            {id: "data", list: data, prettyName: 'Data'},
            {id: "enctranspack", list: enctranspack, prettyName: 'Encoders, Transcoders, Packagers'},
            {id: "frameworks", list: frameworks, prettyName: 'Frameworks'},
            {id: "ides", list: ides, prettyName: 'IDEs'},
            {id: "ads", list: ads, prettyName: 'Ads'},
            {id: "operatingsystems", list: operatingsystems, prettyName: 'Operating Systems'},
            {id: "platforms", list: platforms, prettyName: 'Platforms'},
            {id: "players", list: players, prettyName: 'Players'},
            {id: "programminglanguages", list: programminglanguages, prettyName: 'Programming Languages'},
            {id: "specs", list: specs, prettyName: 'Specifications'},
        ];
    }

    static getAllResources() {
        let list = this.getList();
        let output = "";
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            count = count + list[i].list.length;
            let line = "* " + list[i].prettyName + ": " + list[i].list.map((o) => ("["+o.prettyName+"]("+o.link+")")).join(", ") + "\n";
            output = output + line;
        }
        return "The following " + count + " sources are consulted:\n"+output;
    }

    static getSourceById(id) {
        let list = this.getList();
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].list.length; j++) {
                const source = list[i].list[j];
                if (source.id == id) {
                    return source;
                }
            }
        }
    }

}

module.exports = List;