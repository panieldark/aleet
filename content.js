// alert("test");
chrome.runtime.onMessage.addListener(function(request) {
	alert(request)
})