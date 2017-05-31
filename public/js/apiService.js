angular.module("BookBuddiesMod")
    .service("apiService", function($http){

        var books = {};

        this.setSearchedBooks = function(search) {

            var promise =
                $http({
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes',
                params: {

                    q: search,
                    key: 'AIzaSyChc5wvGyYkMT2CfK9Tc680QBAqRbbExuA'
                }
            }).then(function(response){
                books = response.data;
                cleanData(books.items);
            })
        return promise;
        };

        this.getSearchedBooks = function() {
        return books;
        }


        function cleanData(arr) {
            arr.forEach(function(book) {
                if (book.volumeInfo.title === undefined) {
                    book.volumeInfo.title = "No title available";
                }
                if (book.volumeInfo.authors === undefined) {
                    book.volumeInfo.authors = "No author available";
                }
                if (book.volumeInfo.description === undefined) {
                    book.volumeInfo.description = "No description available";
                }
                if (!book.volumeInfo.imageLinks){
                    book.volumeInfo.imageLinks = {thumbnail: "images/coverplaceholder.gif"};
                    //need thumbnail placeholder
                } else if (book.volumeInfo.imageLinks.thumbnail === undefined && book.volumeInfo.imageLinks.smallThumbnail === undefined) {
                    book.volumeInfo.imageLinks.thumbnail = "images/coverplaceholder.gif";
                    //need thumbnail placeholder
                } else if (book.volumeInfo.imageLinks.thumbnail === undefined && book.volumeInfo.imageLinks.smallThumbnail !== undefined) {
                    book.volumeInfo.imageLinks.thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
                }
            })
        }

    });
