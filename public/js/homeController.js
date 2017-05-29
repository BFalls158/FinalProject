angular.module("BookBuddiesMod")
  .controller("homeController", function($scope, $http, apiService, dbService, $uibModal, $location){

        $scope.status = dbService.getStatus();

        if(!$scope.status) {
            $location.path('/login');
        }

        $scope.user = dbService.setCurrentUser();

        $scope.tradeToggle = function(size, user, title) {
            $scope.setTradeUser(user, title);
            var uibmodalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/requestTrade.html',
                controller: 'tradeController',
                windowClass: 'center-modal'
            })
        }

        $scope.matches;

    	$scope.popularBooks = [];

    $scope.setTradeUser = function(user, title) {
        dbService.setTradeUser(user, title);
    }

    dbService.setMatches($scope.user).then(function(response) {
        $scope.matches = dbService.getMatches();
        $scope.numberOfMatches = $scope.matches.length;
    });

    dbService.popularBooks().then(function(response) {
        $scope.popularBooks = response;
    });


  });
