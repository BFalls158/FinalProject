angular.module("BookBuddiesMod")
    .controller("loginController", function($scope, apiService, dbService, $location){

    	$scope.status = dbService.getStatus();

    	$scope.user = dbService.setCurrentUser();


    	$scope.logIn = function(user, password) {
    		dbService.getUserInfo(user).then(function(response) {

    		})
    	}	
    });
