angular.module('BookBuddiesMod')
  .directive('matchFeed', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/matches.html'
    }
  });