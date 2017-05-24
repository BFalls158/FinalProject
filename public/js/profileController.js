angular.module("BookBuddiesMod")
    .controller("profileController", function($scope, apiService, dbService, $rootScope){

    	$scope.user = "BFalls";

    	$scope.myLibrary = [];

    	$scope.myWatchlist = [];

    	$scope.getLibrary = dbService.getLibrary($scope.user).then(function(response){
    		$scope.myLibrary = response;
    		console.log(response);
    	});

    	$scope.getWatchlist = dbService.getWatchlist($scope.user).then(function(response){
    		$scope.myWatchlist = response;
    		console.log(response);
    	});

    	$scope.deleateWishlist = dbService.deleteWishlist;

    	$scope.deleateLibrary = dbService.deleteLibrary;
    });
