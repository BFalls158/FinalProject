angular.module("BookBuddiesMod")
    .controller("loginController", function($scope, $http, apiService, dbService, $location, $uibModal, $rootScope){

    	$scope.status = dbService.getStatus();

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
    				$rootScope.user = user.username;
                    console.log($rootScope.user);
                    dbService.setStatus(true);
					$scope.loginError = false;
					$location.path('/home');
    			} else {
    				$scope.loginError = true;
    			}
    		});
    	}

    });
