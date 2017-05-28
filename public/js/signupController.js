angular.module("BookBuddiesMod")
    .controller("signupController", function($scope, $http, apiService, dbService, $uibModal, $location){

    $scope.submitForm = function(formValid) {
    if(formValid) {
      console.log('This form is valid.');
      console.log($scope.user);
    }
  }

    });
