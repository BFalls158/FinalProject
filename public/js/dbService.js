angular.module("BookBuddiesMod")
    .service("dbService", function($http){


      //this retrieves the library of every user
      this.getTotalLibrary = function() {
        return $http({
            method: 'GET',
            url:'/db/library',
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrives the library of a specific user
      this.getLibrary = function() {
        return $http({
          method: 'GET',
          url:'/db/library/:username',
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the watchlist of every user
      this.getTotalWatchlist = function() {
        return $http({
            method:'GET',
            url:'/db/watchlist',
      }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the watchlist of a specified user
      this.getWatchlist = function() {
        return $http({
            method: 'GET',
            url: '/db/watchlist/:username',
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the  of a specified user
      this.getUserInfo = function(user) {
        return $http({
            method: 'GET',
            url: '/db/userinfo/'+ user,
        }).then(function(response) {
            return response.data;
        });
      };
      //this deletes a title from library
      this.deleteLibrary = function(itemId) {
        return $http({
            method: 'DELETE',
            url: '/api/library/'+ itemId,
        }).then(function(response) {
            return response;
        });
      };
      //this deletes a title from watchlist
      this.deleteWatchlist = function(itemId) {
        return $http({
            method: 'DELETE',
            url: '/api/watchlist/'+ itemId,
        }).then(function(response) {
            return response;
        });
      };
      //this adds a book to the users library
      this.addToLibrary = function(item) {
        return $http({
            method: 'POST',
            url: '/api/library',
            data: item
        }).then(function(response) {
            return response;
        });
      };
      //this adds a book to the users watchlist
      this.addToWatchlist = function(item) {
        return $http({
            method: 'POST',
            url: '/api/watchlist',
            data: item
        }).then(function(response) {
            return response;
        })
      };
    });
