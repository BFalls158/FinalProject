angular.module("BookBuddiesMod")
    .controller("signupController", function($scope, apiService, dbService, $location){

    	$scope.status = dbService.getStatus();

    	if ($scope.status) {
    		$location.path('/home');
    	}

    });