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
                // console.log(response.data);
            })
        return promise;
        };

       this.getSearchedBooks = function() {
        return books;
       }
    });
