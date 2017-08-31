'use strict';

angular.module('MyLoci')

.controller('DashboardController',
  ['$scope', '$location', '$timeout','DashboardService','$cookieStore',
  function ($scope, $location, $timeout, DashboardService, $cookieStore) {
      $scope.methods=['GET', 'POST', 'PUT', 'DELETE']
      console.log("Dashboard")
      console.log($cookieStore.get('globals'))
      $('#mydiv').hide();
      $scope.tab = 1;

        $scope.methodSelected = function(){
          // body...
          alert($scope.selectedMethod)
          if($scope.selectedMethod == 'POST'){
            document.getElementById('table').style.display='block'
            document.getElementById('query').style.display='none'

          }else{
            document.getElementById('table').style.display='none'
            document.getElementById('query').style.display='block'
          }
        }

        $scope.setTab = function (tabId) {
          console.log("inside");

            $scope.tab = tabId;
        };

        $scope.isSet = function (tabId) {
            console.log("inside");
             $scope.tab === tabId;
        };
      // DashboardService.userData(data, function(response) {
      //     $scope.dataLoading = false;
      //     console.log(response)
      //     if(response.success == false){
      //       $scope.error = response.message;
      //       $timeout(function () { $scope.error = ''; }, 5000);
      //     }
      //     else{
      //       //$location.path('/dashboard');
      //       console.log(response)
      //     }
      //
      //   }
      // );

}]);
