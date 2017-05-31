angular.module("BookBuddiesMod")
    .service("dbService", function($http, $location){

      var matches = [];
      var tradeUser;
      var selectedMatch;
      var isLoggedIn = false;
      var currentUser;

      this.setStatus = function(status) {
        isLoggedIn = status;
      }

      this.getStatus = function () {
        return isLoggedIn;
      }

      //Sets the dummy user
      this.getCurrentUser = function() {
        return currentUser;
      }

      this.setCurrentUser = function (user) {
        currentUser = user;
      }

      this.setTradeUser = function(user, match) {
        tradeUser = user;
        selectedMatch = match;
      }

      this.getTradeUser = function() {
        return tradeUser;
      }

      this.getSelectedMatch = function() {
        return selectedMatch;
      }

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
      this.deleteLibrary = function(id) {
        return $http({
            method: 'DELETE',
            url: '/db/library/' + id
        }).then(function(response) {
            console.log('deleted');
            return response;
        });
      };
      //this deletes a title from watchlist
      this.deleteWatchlist = function(id) {
        return $http({
            method: 'DELETE',
            url: '/db/watchlist/'+ id
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
        });
      };


      // Retrieves matches for the logged in user.
      this.setMatches = function(user) {
        return $http({
          method: 'GET',
          url: '/db/matches/' + user
        }).then(function(response){
          matches = response.data;
          return response.data;
        });
      }

      // Sends the matches to controller
      this.getMatches = function() {
        return matches;
      }


      this.newUser = function(user) {
        return $http({
          method: 'POST',
          url: '/db/signup/',
          data: user
        }).then(function(response) {
          return response;
        });
      }

      this.checkUser = function(user) {
        return $http({
          method: 'GET',
          url: '/db/signup/' + user,
        }).then(function(response) {
          return response.data;
        });
      }

      this.login = function(user) {
        return $http({
          method: 'POST',
          url: '/db/login',
          data: user
        }).then(function(response) {
          return response.data;
        });
      }

      this.popularBooks = function() {
        return $http({
          method: 'GET',
          url: '/db/popularBooks',
        }).then(function(response) {
          return response.data;
        })
      }
});