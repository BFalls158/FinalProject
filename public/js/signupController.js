angular.module("BookBuddiesMod")
    .controller("signupController", function($scope, apiService, dbService){

    $scope.submitForm = function(formValid) {
    if(formValid) {
      console.log('This form is valid.');
      console.log($scope.user);
    }
  }
    
    });
