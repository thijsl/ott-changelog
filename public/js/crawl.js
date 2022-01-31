const renderList = (list) => {
    let nbOfResources = 0;
    const div1 = document.createElement('div');
    document.body.appendChild(div1);
    const ul1 = document.createElement('ul');
    div1.appendChild(ul1);
    list.forEach((el,i1) => {
        const li = document.createElement("li");
        li.innerText = el.prettyName;
        ul1.appendChild(li);
        const ul2 = document.createElement('ul');
        ul1.appendChild(ul2);
        el.list.forEach((el2,i2) => {
            const li2 = document.createElement("li");
            li2.id = "r-"+i1+"-"+i2;
            li2.innerHTML = el2.prettyName + ' <span class="status">⏳</span>';
            ul2.appendChild(li2);
            nbOfResources++;
        })
    });
    _data.nbOfResources = nbOfResources;
    progress.update(0, _data.nbOfResources);
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const crawlList = (list) => {
    let currentResource = 0;
    list.forEach((el,i1) => {
        el.list.forEach((el2,i2) => {
            postData('/crawl-source', el2)
                .then(data => {
                    console.log(el2.prettyName, data);
                    const nbOfCrawledArticles = data.articles.length;
                    const newArticles = data.newArticles;
                    const id = "r-"+i1+"-"+i2;
                    if (nbOfCrawledArticles > 0 && newArticles > 0) {
                        document.getElementById(id).querySelector("span").innerText = `🟢 (${newArticles} articles added)`;
                    } else if (nbOfCrawledArticles > 0 && newArticles == 0) {
                        document.getElementById(id).querySelector("span").innerText = `🟠 (0 articles added)`;
                    } else {
                        document.getElementById(id).querySelector("span").innerText = `🔴 (0 articles crawled)`;
                    }
                    currentResource++;
                    progress.update(currentResource, _data.nbOfResources);
                    if (currentResource == _data.nbOfResources) {
                        progress.complete();
                    }
                });
        })
    })
}

const progress = {
    insert: () => {
        const progressDiv = document.createElement('div');
        progressDiv.id = "crawl-progress";
        document.body.appendChild(progressDiv);
    },
    update: (current, total) => {
        const progressDiv = document.getElementById('crawl-progress');
        progressDiv.innerText = current + "/" + total;
    },
    complete: () => {
        const progressDiv = document.getElementById('crawl-progress');
        if (!progressDiv.classList.contains("complete")) {
            progressDiv.classList.add("complete");
        }
        postData('/articles/crawl/complete', {})
            .then(result => {
                console.log("complete", result);
            });
    }
}

let _data = {};

const main = () => {
    progress.insert();
    fetch("/crawl-list").then((data)=> {
        data.json().then(list => {
            _data.list = list;
            console.log("data", _data);
            renderList(list);
            crawlList(list);
        })
    })
}

main();