function UsernameController($scope) {
	$scope.getGithubUserInfo = function() {
		$scope.user = {};
		$scope.followers = [];
		$scope.getUserInfo().then(function(){});
	};

	$scope.getUserInfo = function(){
		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			    if (xhr.readyState == XMLHttpRequest.DONE) {
			    	let objUser = JSON.parse(xhr.responseText);
			    	$scope.getFollowers(objUser.followers_url).then(function(arrFollowers){
			    		console.log(arrFollowers)
			    		$scope.$apply(function() {
	  						$scope.user = objUser;
	  						$scope.followers = arrFollowers;
	  						console.log($scope.followers)
						});
			    		resolve();
			    	})
			    }
			}
			xhr.open('GET', 'https://api.github.com/users/' + $scope.username, true);
			xhr.send(null);
		});
	}

	$scope.getFollowers = function(uri){
		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == XMLHttpRequest.DONE) {
					resolve(JSON.parse(xhr.responseText));
				}
			}
			xhr.open('GET', uri, true);
			xhr.send(null);			
		});
	}

	$scope.getMoreFollowers = function(){
		return new Promise(function(resolve, reject){

		});
	}
}