angular.module("BookBuddiesMod")
  .controller("signupController", function($scope, $uibModal, $http, apiService, dbService, $location, $uibModalInstance){

    	$scope.status = dbService.getStatus();

    	$scope.userAvailable = true;

    	$scope.ok = function() {
            $uibModalInstance.close();
        }

	    $scope.submitForm = function(validation) {
	    	if (validation) {
		    	dbService.checkUser($scope.newUser.username).then(function(response) {
		    		if(response === "Username available") {
		    			$scope.userAvailable = true;
		    			dbService.newUser($scope.newUser).then(function() {
		    				//Log user in!!!!!
		    				dbService.setCurrentUser($scope.newUser.username);
		    				dbService.setStatus(true);
		    				$scope.newUser = {};
		    				$location.path('/home');
		    				$scope.cancel();
		    			}).catch(function(error) {
		    				console.log('something went wrong...');
		    			})
		    		} else {
		    			$scope.userAvailable = false;
		    		}
		    	})
	    	}
	    }
      //cancel button function
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
    });
