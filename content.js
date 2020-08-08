// alert("test");
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// 	const re = new RegExp('test','gi')
// 	const matches = document.documentElement.innerHTML.match(re)
// 	sendResponse({count: matches.length})
// })
const re = new RegExp('test','gi')
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
	url: window.location.href,
	count: matches.length
})