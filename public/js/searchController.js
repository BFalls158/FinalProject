angular.module("BookBuddiesMod")
    .controller("searchController", function($scope, $location, apiService, dbService){
    	
        $scope.setSearch = function(search, type){
            apiService.setSearchedBooks(search, type)
                .then(function() {
                    $location.path("/searchResults");
                })
        }
    });
