window.tests = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	window.tests[request.url] = request.count
})


chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({url: 'popup.html'})
})