angular.module("BookBuddiesMod")
    .service("apiService", function($http){
        
       this.setBooks = function(search, type) {
           
           var promise =
            $http({
            method: "GET",
            url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + type,    
            params: {
                key: 'AIzaSyChc5wvGyYkMT2CfK9Tc680QBAqRbbExuA',
                q: intitle:search
            }    
        });   
        return promise;   
       };
    
        
        this.setAuthor = function(search, type) {

               var promise =
                $http({
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + type,    
                params: {
                    key: 'AIzaSyChc5wvGyYkMT2CfK9Tc680QBAqRbbExuA',
                    q: inauthor:search
                }    
            });   
            return promise;   
           };
    
    
    });
