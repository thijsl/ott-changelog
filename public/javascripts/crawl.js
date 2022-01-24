console.log("test");

const renderList = (list) => {
    const div1 = document.createElement('div');
    document.body.appendChild(div1);
    const ul1 = document.createElement('ul');
    div1.appendChild(ul1);
    list.forEach((el) => {
        const li = document.createElement("li");
        li.innerText = el.prettyName;
        ul1.appendChild(li);
        const ul2 = document.createElement('ul');
        ul1.appendChild(ul2);
        el.list.forEach(el2 => {
            const li2 = document.createElement("li");
            li2.innerHTML = el2.prettyName + '<span class="status">⏳</span>';
            ul2.appendChild(li2);
        })
    })
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
    list.forEach(el => {
        el.list.forEach(el2 => {
            postData('/crawl-source', el2)
                .then(data => {
                    console.log(el2.prettyName, data);
                });
        })
    })
}

const main = () => {
    fetch("/crawl-list").then((data)=> {
        data.json().then(list => {
            console.log("list", list);
            renderList(list);
            crawlList(list);
        })
    })
}

main();