angular.module("BookBuddiesMod")
  .controller("signupController", function($scope, $uibModal, $http, apiService, dbService, $location, $uibModalInstance){

    	$scope.status = dbService.getStatus();

    	$scope.userAvailable = true;

    	$scope.ok = function() {
            $uibModalInstance.close();
        }

	    $scope.submitForm = function(userInfo) {
	    	dbService.checkUser(userInfo.username).then(function(response) {
	    		if(response === "Username available") {
	    			$scope.userAvailable = true;
	    			dbService.newUser(userInfo).then(function() {
	    				$scope.newUser = {};
	    				//Log user in!!!!!
	    				dbService.setCurrentUser(userInfo.username);
	    				dbService.setStatus(true);
	    				$location.path('/home');
	    			}).catch(function(error) {
	    				console.log('something went wrong...');
	    			})
	    		} else {
	    			$scope.userAvailable = false;
	    		}
	    	})
	    }
      //cancel button function
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
    });
