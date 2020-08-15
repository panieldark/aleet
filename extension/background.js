// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })

// chrome.browserAction.onClicked.addListener(function (tab) {
	
//   chrome.tabs.create({url: 'popup.html'})
  
// })

chrome.runtime.onMessage.addListener(data => {
	if (data.type === 'notification') {
	  chrome.notifications.create('yes', 
	  {
		type: 'basic',
		title: 'Just wanted to notify you',
		message: 'How great it is!',
		iconUrl: "icon.png"
	  });
	}
  });