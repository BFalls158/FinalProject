angular.module("BookBuddiesMod")
    .controller("tradeController", function($scope, $location, apiService, dbService, emailService, $uibModalInstance, $uibModal, $rootScope){

        $scope.status = dbService.getStatus();

        $scope.user = $rootScope.user;

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

        //Call DB to get user's library
        dbService.getLibrary($scope.user).then(function(response) {
            $scope.userLibrary = response;
        });
        //call DB to get other user's library
        dbService.getLibrary($scope.tradeUser).then(function(response) {
            $scope.tradeUserLibrary = response;
            var match = dbService.getSelectedMatch();
            $scope.tradeUserLibrary.forEach(function(curr) {
                if (curr.title === match) {
                    $scope.addToTradeUserTrade(curr);
                }
            })
        });
        //moves a book back to it's user's library
        $scope.deleteFromUserTrade = function(obj) {
            var index = $scope.userTrade.indexOf(obj);
            $scope.userLibrary.push($scope.userTrade[index]);
            $scope.userTrade.splice(index, 1);
        }
        //moves a book back to it's user's library
        $scope.deleteFromTradeUserTrade = function(obj) {
            var index = $scope.tradeUserTrade.indexOf(obj);
            $scope.tradeUserLibrary.push($scope.tradeUserTrade[index]);
            $scope.tradeUserTrade.splice(index, 1);
        }
        //Propose trade button function to send email
        $scope.proposeTrade =  function() {
            var title1 = concatArr($scope.userTrade);
            var title2 = concatArr($scope.tradeUserTrade);
        	var user1 = {
        		name: userInfo.username,
        		email: userInfo.email,
        		title: title1
        	}
        	var user2 = {
        		name: tradeUserInfo.username,
        		email: tradeUserInfo.email,
        		title: title2
        	}

            $scope.sendEmail(user1, user2);

            $scope.ok(); //Closes modal
        }

        $scope.ok = function() {
          //opens confirmation modal
          $scope.confirmTrade = function(size) {
              var uibmodalInstance = $uibModal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'views/confirmation.html',
                  controller: 'tradeController'
              })
          }
            $uibModalInstance.close();
        }
        //cancel button function
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }



    	$scope.sendEmail = function(user1, user2) {
            emailService.sendEmail(user1, user2).then(function() {
    		console.log('Success'); //user message here
    	   });
        }

       function concatArr(arr) {
            var newArr = [];
            arr.forEach(function(curr) {
                newArr.push(curr.title);
            })
            return newArr.join(', ');
        }

    });
