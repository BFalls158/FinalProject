angular.module("BookBuddiesMod")
    .controller("updateController", function($scope, apiService, dbService){
    	$scope.user = dbService.setCurrentUser();
    });
