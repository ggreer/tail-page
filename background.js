chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("browser action button clicked. running script...");
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});
