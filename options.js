function restore() {
    var i;
    var url_input;
    var url_list_node;
    var urls = [];

    if (localStorage.urls) {
        urls = JSON.parse(localStorage.urls);
    }

    url_list_node = document.getElementById("url_list");

    for (i=0; i<urls.length; i++) {
        url_input = document.createElement("input");
        url_input.value = urls[i];
        url_input.setAttribute("class", "url");
        url_input.setAttribute("type", "text");
        url_list_node.insertBefore(url_input);
        console.log("loaded", urls[i]);
    }
}

function save() {
    var i;
    var url;
    var url_elements = document.getElementsByClassName("url");
    var urls = [];

    for (i=0; i<url_elements.length; i++) {
        urls.push(url_elements[i].value);
        console.log("stored", url_elements[i].value);
    }

    localStorage.urls = JSON.stringify(urls);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click', save);
    restore();
});

