angular.module("BookBuddiesMod")
    .controller("profileController", function($scope, apiService, dbService){

    	$scope.user = "BFalls";

    	$scope.myLibrary = [];

    	$scope.myWatchlist = [];

    	$scope.getLibrary = function(){
    		dbService.getLibrary($scope.user).then(function(response){
    		$scope.myLibrary = response;
    		});
    	}

    	$scope.getWatchlist = function(){
    		dbService.getWatchlist($scope.user).then(function(response){
    		$scope.myWatchlist = response;
    		});
    	}

    	$scope.deleteWishlist = function(id) {
			dbService.deleteWishlist(id).then(function(){
                $scope.myWatchlist = [];
                $scope.getWatchlist();

			});
    	}

    	$scope.deleteLibrary = function(id) {
    		dbService.deleteLibrary(id).then(function(){
    	        $scope.myLibrary = [];
                $scope.getLibrary();
    		});
    	}

        $scope.getLibrary();
        $scope.getWatchlist();
    });
