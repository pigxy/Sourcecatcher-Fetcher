function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function getImage(image, tab) {
    srcUrl = "https://sourcecatcher.com/link?url=" + image.srcUrl

    var creating = browser.tabs.create({
        url: srcUrl
    });

    creating.then(onCreated, onError);
}

browser.contextMenus.create({
    id: "catch-source",
    title: "Catch Source",
    contexts: ["image"],
});

browser.contextMenus.onClicked.addListener(function(image, tab) {
    if (image.menuItemId == "catch-source") {
        getImage(image, tab);
    }
})
