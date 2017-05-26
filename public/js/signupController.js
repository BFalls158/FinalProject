angular.module("BookBuddiesMod")
    .controller("signupController", function($scope, $http, apiService, dbService, $uibModal, $location){

      $scope.signupToggle = function(size) {
          var uibmodalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'views/signup.html',
              controller: 'signupController',
              windowClass: 'center-modal'
          })
      }

    $scope.submitForm = function(formValid) {
    if(formValid) {
      console.log('This form is valid.');
      console.log($scope.user);
    }
  }
    
    });
