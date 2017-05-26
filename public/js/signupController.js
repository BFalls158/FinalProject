angular.module("BookBuddiesMod")
    .controller("signupController", function($scope, apiService, dbService, $location){

    $scope.submitForm = function(formValid) {
    if(formValid) {
      console.log('This form is valid.');
      console.log($scope.user);
    }
  }
    	$scope.status = dbService.getStatus();

    	if ($scope.status) {
    		$location.path('/home');
    	}

    });
