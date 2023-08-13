let cont = document.getElementById("searchResults");
let user = document.getElementById("searchInput");

function create(search) {
    let {
        title,
        link,
        description
    } = search;
    let cont1 = document.createElement("div");
    cont1.classList.add("result-item");


    let head = document.createElement("a");
    head.href = link;
    head.target = "_blank";
    head.classList.add("result-title");
    cont1.appendChild(head);
    head.textContent = title;
    let headbr = document.createElement("br");
    cont1.appendChild(headbr);
    let linker = document.createElement("a");
    linker.href = link;
    linker.target = "_blank";
    linker.classList.add("result-url");
    cont1.appendChild(linker);
    linker.textContent = link;
    let linkbr = document.createElement("br");
    cont1.appendChild(linkbr);
    let des = document.createElement("p");
    head.classList.add("result-description");
    cont1.appendChild(des);
    des.textContent = description;

    cont.appendChild(cont1);
}

function display(searchresults) {
    for (let search1 of searchresults) {
        create(search1);
    }
}

function search(event) {
    if (event.key === "Enter") {
        let usertext = user.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + usertext;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data)
                let {
                    search_results
                } = data;
                display(search_results);
            })
    }
}
user.addEventListener("keydown", search)