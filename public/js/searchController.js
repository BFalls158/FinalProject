angular.module("BookBuddiesMod")
    .controller("searchController", function($scope, $location, apiService, dbService, $rootScope){

    	$rootScope.user = 'BFalls';

    	$scope.user = $rootScope.user;

 		$scope.list = [];

        $scope.setSearch = function(search){
            apiService.setSearchedBooks(search)
                .then(function() {
                	$scope.list = [];
                    $location.path("/searchResults");
                    $scope.showResults();
                })
        }


        $scope.showResults = function(){

          var books = apiService.getSearchedBooks();
          console.log(books);
          
          books.items.forEach(function(book) {
              $scope.list.push({author: book.volumeInfo.authors[0],
               thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
               title: book.volumeInfo.title, 
               description: book.volumeInfo.description});
              })
          console.log($scope.list);
        }

        $scope.addToLibrary = function (book) {
        	var entry = {
        		username: $rootScope.user,
        		title: book.title,
        		author: book.author,
        		description: book.description,
        		thumbnail: book.thumbnail
        	}
        	dbService.addToLibrary(entry);
        }

        $scope.addToWatchlist = function (book) {
        	var entry = {
        		username: $rootScope.user,
        		title: book.title,
        		author: book.author,
        		description: book.description,
        		thumbnail: book.thumbnail
        	}
        	dbService.addToWatchlist(entry);
        }
    });
