
// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

// const successElements = document.getElementsByClassName('.success__3Ai7')
// if (successElements) 


// const slug = window.location.pathname.split('/')[2];
// alert(slug)
// var x = "";
// 	function getLocation() {
// 		if (navigator.geolocation) {
// 		  navigator.geolocation.getCurrentPosition(showPosition);
// 		} else { 
// 		  x = "Geolocation is not supported by this browser.";
// 		}
// 	  }
	  
// 	  function showPosition(position) {
// 		x = "Latitude: " + position.coords.latitude + 
// 		"<br>Longitude: " + position.coords.longitude;
// 		alert(x)
// 	  }
// 	getLocation()
// chrome.runtime.sendMessage({
//   url: slug,
//   count: 1
// })
const button = document.createElement('button');
button.textContent = 'Greet me!'
document.body.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
	chrome.runtime.sendMessage('', {
	  type: 'notification'
	});
  });