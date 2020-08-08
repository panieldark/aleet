document.addEventListener('DOMContentLoaded', function() {

	const bg = chrome.extension.getBackgroundPage()
	Object.keys(bg.tests).forEach(function(url) {
		const div = document.createElement('div')
		div.textContent = `${url}: ${bg.tests[url]}`
		document.body.appendChild(div)
	})

}, false)
