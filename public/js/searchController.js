angular.module("BookBuddiesMod")
    .controller("searchController", function($scope, $location, apiService, dbService, $uibModal, $rootScope){

        $scope.status = dbService.getStatus();

        $scope.list = [];

        $scope.setSearch = function(search){
            apiService.setSearchedBooks(search)
                .then(function() {
                    $scope.list = [];
                    $location.path("/searchResults");
                    $scope.showResults();
                });
            $scope.search = null;
        }


        $scope.showResults = function(){

          var books = apiService.getSearchedBooks();

          books.items.forEach(function(book) {
              $scope.list.push(
                {
                    author: book.volumeInfo.authors[0],
                    thumbnail: book.volumeInfo.imageLinks.thumbnail,
                    title: book.volumeInfo.title,
                    description: book.volumeInfo.description});
                }
              )
        }

        $scope.addToLibrary = function (book) {
            var entry = {
                username: $rootScope.user,
                title: book.title,
                author: book.author,
                description: book.description,
                thumbnailurl: book.thumbnail
            }
            dbService.addToLibrary(entry);
        }

        $scope.addToWatchlist = function (book) {
            var entry = {
                username: $rootScope.user,
                title: book.title,
                author: book.author,
                description: book.description,
                thumbnailurl: book.thumbnail
            }
            dbService.addToWatchlist(entry);
        }

        $scope.logOut = function() {
            dbService.setStatus(false);
            dbService.setCurrentUser(null);
            $location.path('/login');
        }
    });
