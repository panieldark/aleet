import config from './config/uris.js';
// import axios from 'axios';


// document.addEventListener('DOMContentLoaded', function () {

// 	const bg = chrome.extension.getBackgroundPage()
// 	Object.keys(bg.bears).forEach(function (url) {
// 	  const div = document.createElement('div')
// 	  div.textContent = `${url}: ${bg.bears[url]}`
// 	  document.body.appendChild(div)
// 	})

//   }, false)

function get_token(callback) {
	const get_token_url = 'http://127.0.0.1:8000/get_token';
	$.ajax({
		url: get_token_url,
		type:"GET",
		
		success: function(data) {
			callback(data.csrf)
		}, error: function(xhr, status, error) {
			console.log(xhr.responseText)
		}
	})
}
$('#loginForm').submit(function() {
    var $inputs = $('#loginForm :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
	});
	if (values['username'] && values['password']) {
		// get CRSF token, then attempt login
		get_token(function(token) {
			const csrf_token = token
		$.ajax({
			url: 'http://127.0.0.1:8000/login',
			type:"POST",
			data: {
				'username': username, 'password':password,
				'csrfmiddlewaretoken' : csrf_token
			},
			success: function(data) {
				console.log(data.message)
			}, error: function(xhr, status, error) {
				console.log(xhr.responseText)
			}
		})
		})
	}

});

const url = 'http://127.0.0.1:8000/';

	


(async () => {
	const all_questions_raw = await getAllQuestions(config.uris.allProblems);
	console.log(all_questions_raw.data)

	async function getAllQuestions(endpoint) {
		return await axios.get(endpoint)
	  }
		}
	)();


	// get login token
	// fetch(config.uris.login
	// 	.then(res => {
	// 	// returns an array of values, instead of a string of comma-separated values
	// 	alert((res.headers.raw()));
	// }));
	// GET LOGIN TOKEN
// 	$.ajax(config.uris.login, {
//      method: 'GET',
// 	 headers: {'Referer': config.uris.base, 'Host': 'leetcode.com'},
// 	 credentials: 'include',
// 	 crossDomain: true,
// 	 success: function(res, status, xhr) {
// 		alert(xhr.getAllResponseHeaders());

		 
// 	 }, error: function(xhr, status, error) {
// 		 console.log('Error', xhr.responseText)
// 	 }
//   });
	
	
	// LOGIN
	// $.ajax(config.uris.login, {
	// 	method: 'POST',
	// 	data: {login_id: 'danielpark1140@gmail.com', password: 'pepper32'},
	// 	crossDomain: true,
	// 	success: function(data) {
	// 		console.log(data)
	// 	}, error: function(xhr, status, error) {
	// 		console.log('Error', xhr.responseText)
	// 	}
	// });


	// $.ajax({
	// 	url: 'https://leetcode.com/api/problems/algorithms/',
	// 	type:"GET",
	// 	success: function(data) {
	// 		callback(data.csrf)
	// 	}, error: function(xhr, status, error) {
	// 		console.log(xhr.responseText)
	// 	}
	// })

