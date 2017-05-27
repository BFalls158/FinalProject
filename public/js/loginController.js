angular.module("BookBuddiesMod")
    .controller("loginController", function($scope, $http, apiService, dbService, $location){

    	$scope.status = dbService.getStatus();

    	$scope.user = dbService.setCurrentUser();


    	$scope.logIn = function(user) {
    		console.log('function is clicking');
    		dbService.login(user).then(function(response) {
    			console.log(response);
    			if(response === "Success"){
    				dbService.setCurrentUser(user.username);
					$scope.loginError = false;
					$location.path('/home');
    			} else {
    				$scope.loginError = true;
    			}
    		});
    	}

    });
