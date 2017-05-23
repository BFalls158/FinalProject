angular.module("BookBuddiesMod")
    .controller("searchResultsController", function($scope, apiService, dbService){

        $scope.list = [];

        $scope.showResults = function(newResult){
            $scope.list.push([{title: newResult.title, author: newResult.author}]);
        }
    });
