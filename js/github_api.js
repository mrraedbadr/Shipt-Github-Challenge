const request = require('request');

module.exports = GithubApi;

function GithubApi(){}

GithubApi.prototype.getUserInfo = function(strUsername){
	return new Promise((resolve, reject) => {
		
		let objOptions = {
			url: 'https://api.github.com/users/' + strUsername,
  			headers: {
    			'User-Agent': 'request'
  			}
		}

		request(objOptions, function (error, response, body) {
		 	console.log('error:', error); // Print the error if one occurred 
		  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		  	console.log('body:', body); // Print the HTML for the Google homepage. 
		});
	});	
}