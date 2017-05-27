angular.module('BookBuddiesMod')
  .directive('logIn', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: 'views/login'
    }
  })
  .directive('matchFeed', function() {
    return {
      restrict: 'E',
<<<<<<< HEAD
      replace: true,
=======
      replace: false,
>>>>>>> master
      templateUrl: 'views/matches.html'
    }
  })
  .directive('tradeForm', function() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'views/requestTrade.html'
    }
  });
