var active_urls = [];

function check_url(tab_id, change_info, tab) {
  var i;
  for (i = 0; i < active_urls.length; i++) {
    if(tab.url === active_urls[i]) {
      chrome.pageAction.show(tab_id);
      break;
    }
  }
  chrome.pageAction.hide(tab_id);
  if(tab.url === "https://reach-bb.k1k.me/waterfall") {
    chrome.pageAction.show(tab_id);
  }
}

chrome.tabs.onUpdated.addListener(check_url);

chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});
