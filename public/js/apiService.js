angular.module("BookBuddiesMod")
    .service("apiService", function($http){

        var books = {};

        this.setSearchedBooks = function(search, type) {

            var promise =
                $http({
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes',
                params: {
                    key: 'AIzaSyChc5wvGyYkMT2CfK9Tc680QBAqRbbExuA',
                    q: type + search //'intitle:Name of the wind'
                }
            }).then(function(response){
                books = response.data;
            })
        return promise;
        };

       this.getSearchedBooks = function() {
        return books;
       }
    });
