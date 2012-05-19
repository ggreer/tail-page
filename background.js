function check_url(tab_id, change_info, tab) {
    var active_urls = JSON.parse(localStorage.urls);
    var i;

    chrome.pageAction.hide(tab_id);

    for (i = 0; i < active_urls.length; i++) {
        if(tab.url === active_urls[i]) {
            chrome.pageAction.show(tab_id);
            break;
        }
    }
}

chrome.tabs.onUpdated.addListener(check_url);

chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});
