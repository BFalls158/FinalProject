angular.module('BookBuddiesMod')
  .directive('logIn', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/views/login'
    }
  })
  .directive('matchFeed', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/views/matches.html'
    }
  });
