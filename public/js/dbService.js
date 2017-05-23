angular.module("BookBuddiesMod")
    .service("dbService", function($http){


      //this retrieves the library of every user
      .this.getTotalLibrary = function() {
        return $http({
            method: 'GET',
            url:'/db/library',
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrives the library of a specific user
      .this.getLibrary = function() {
        return $http({
          method: 'GET',
          url:'/db/library/:username',
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the watchlist of every user
      .this.getTotalWatchlist = function() {
        return $http({
            method:'GET',
            url:'/db/watchlist',
      }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the watchlist of a specified user
      .this.getWatchlist = function() {
        return $http({
            method: 'GET',
            url: 'db/watchlist/:username',
        }).then(function(response) {
            return response.data;
        });
      };
      //

    });
