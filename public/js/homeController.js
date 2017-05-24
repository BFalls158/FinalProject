angular.module("BookBuddiesMod")

    .controller("homeController", function($scope, $http, $modal, apiService, dbService){


      $scope.items = ['item1', 'item2', 'item3'];

       $scope.open = function () {

         var modalInstance = $modal.open({
           templateUrl: 'requestTrade.html',
           controller: ModalInstanceCtrl,
           resolve: {
             items: function () {
               return $scope.items;
             }
           }
         });

         modalInstance.result.then(function (selectedItem) {
           $scope.selected = selectedItem;
         }, function () {
           $log.info('Modal dismissed at: ' + new Date());
         });
       };
     };

     var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

       $scope.items = items;
       $scope.selected = {
         item: $scope.items[0]
       };

       $scope.ok = function () {
         $modalInstance.close($scope.selected.item);
       };

       $scope.cancel = function () {
         $modalInstance.dismiss('cancel');
       };
     };






    	$scope.popularBooks = [];

    });
