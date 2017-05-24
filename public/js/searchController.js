angular.module("BookBuddiesMod")
    .controller("searchController", function($scope, $location, apiService, dbService){

        $scope.setSearch = function(search){
            apiService.setSearchedBooks(search)
                .then(function() {
                    $location.path("/searchResults");
                })
        }
    });
