angular.module("BookBuddiesMod")
    .controller("loginController", function($scope, $http, apiService, dbService, $location, $uibModal){

    	$scope.status = dbService.getStatus();

    	$scope.user = dbService.getCurrentUser();

        $scope.signupToggle = function(size) {
            var uibmodalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/signup.html',
                controller: 'signupController',
                // windowClass: 'center-modal'
            })
        }


    	$scope.logIn = function(user) {
    		dbService.login(user).then(function(response) {
    			if(response === "Success"){
    				dbService.setCurrentUser(user.username);
                    dbService.setStatus(true);
					$scope.loginError = false;
					$location.path('/home');
    			} else {
    				$scope.loginError = true;
    			}
    		});
    	}

    });
