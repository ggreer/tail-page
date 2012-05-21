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
    var saved_image = document.getElementById('saved_ok');

    localStorage.urls = JSON.stringify(urls);

    saved_ok.style.display = "block";
    window.setTimeout(function () { saved_ok.style.display = "none"; }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click', save);
    restore();
});
