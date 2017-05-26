angular.module("BookBuddiesMod")
    .controller("tradeController", function($scope, $location, apiService, dbService, emailService){

        $scope.user = dbService.setCurrentUser();

        $scope.tradeUser = dbService.getTradeUser();

        //get user info
        var userInfo;
        var tradeUserInfo;
        dbService.getUserInfo($scope.user).then(function(response) {
            userInfo = response[0];
        });

        dbService.getUserInfo($scope.tradeUser).then(function(response) {
            tradeUserInfo = response[0];
        });

        //Initialize arrays to ng-repeat
        $scope.userLibrary = [];
        $scope.tradeUserLibrary = [];
        $scope.userTrade = [];
        $scope.tradeUserTrade = [];

        $scope.getLibrary = dbService.getLibrary;

        $scope.addToUserTrade = function (obj) {
            var index = $scope.userLibrary.indexOf(obj);
            $scope.userTrade.push($scope.userLibrary[index]);
            $scope.userLibrary.splice(index, 1);
        }

        $scope.addToTradeUserTrade = function (obj) {
            var index = $scope.tradeUserLibrary.indexOf(obj);
            $scope.tradeUserTrade.push($scope.tradeUserLibrary[index]);
            $scope.tradeUserLibrary.splice(index, 1);
        }

        dbService.getLibrary($scope.user).then(function(response) {
            $scope.userLibrary = response;
        });

        dbService.getLibrary($scope.tradeUser).then(function(response) {
            $scope.tradeUserLibrary = response;
        });


        $scope.proposeTrade =  function() {
            console.log(userInfo.email);
            console.log(tradeUserInfo.email);
        	var user1 = {
        		name: userInfo.username,
        		email: userInfo.email,
        		title: $scope.userTrade[0].title
        	}
        	var user2 = {
        		name: tradeUserInfo.username,
        		email: tradeUserInfo.email,
        		title: $scope.tradeUserTrade[0].title
        	}

            $scope.sendEmail(user1, user2);

            $location.path('/');

  };
        }

    	$scope.sendEmail = function(user1, user2) {
            emailService.sendEmail(user1, user2).then(function() {
    		console.log('Success'); //user message here
    	   });
        }
    });
