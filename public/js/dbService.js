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
      this.getLibrary = function(user) {
        return $http({
          method: 'GET',
          url:'/db/library/' + user,
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
      this.getWatchlist = function(user) {
        return $http({
            method: 'GET',
            url: '/db/watchlist/' + user,
        }).then(function(response) {
            return response.data;
        });
      };
      //this retrieves the info of a specified user
      this.getUserInfo = function(user) {
        return $http({
            method: 'GET',
            url: '/db/userinfo/'+ user,
        }).then(function(response) {
            return response.data;
        });
      };
      //this deletes a title from library
      this.deleteLibrary = function(user, title) {
        return $http({
            method: 'DELETE',
            url: '/db/library',
            data: {
              username: user,
              title: title
            },
            headers: {
            "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function(response) {
            console.log('deleted');
            return response;
        });
      };
      //this deletes a title from watchlist
      this.deleteWatchlist = function(user, title) {
        return $http({
            method: 'DELETE',
            url: '/db/watchlist',
            data: {
              username: user,
              title: title
            },
            headers: {
            "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function(response) {
            console.log('deleted');
            return response;
        });
      };
      //this adds a book to the users library
      this.addToLibrary = function(item) {
        return $http({
            method: 'POST',
            url: '/db/library',
            data: item
        }).then(function(response) {
            return response;
        });
      };
      //this adds a book to the users watchlist
      this.addToWatchlist = function(item) {
        return $http({
            method: 'POST',
            url: '/db/watchlist',
            data: item
        }).then(function(response) {
            return response;
        })
      };
    });
