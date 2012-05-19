function restore() {
    var i;
    var url_list_node = document.getElementById("url_list");
    var urls;

    if (localStorage.urls) {
        urls = JSON.parse(localStorage.urls);
    }

    url_list_node.value = urls.join("\n");
}

function save() {
    var url_list_node = document.getElementById("url_list");
    var urls = url_list_node.value.split("\n");

    console.log("saving", urls);
    localStorage.urls = JSON.stringify(urls);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click', save);
    restore();
});

