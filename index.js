var GithubApi = require('./js/github_api');

// create new instance
var github = new GithubApi();

github.getUserInfo('msabree')
.then((res) => {
	console.log(res);
})
.catch((err) => {
	console.log(err);
})