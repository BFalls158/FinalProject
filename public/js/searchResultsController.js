angular.module("BookBuddiesMod")
    .controller("searchResultsController", function($scope, apiService, dbService, $http){
        $scope.list = [];

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

        $scope.showResults();
    });
