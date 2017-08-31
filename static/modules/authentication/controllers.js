'use strict';

angular.module('Authentication')

.controller('LoginController',
  ['$scope', '$rootScope', '$location', '$timeout','AuthenticationService','$ngBootbox','$cookieStore',
  function ($scope, $rootScope, $location, $timeout, AuthenticationService, $ngBootbox, $cookieStore) {
      $scope.validateUser = "Login"
    // reset login status
    if ($cookieStore.get('globals')) {

          $location.path('/dashboard');

        }
    AuthenticationService.ClearCredentials();

    AuthenticationService.setUrl();

    $scope.login = function () {
      console.log("Login")
      $scope.dataLoading = true;
       $scope.validateUser = "Validating"
      AuthenticationService.Login($scope.username, $scope.password, function(response) {
          $scope.dataLoading = false;
          console.log(response)
          if(response.success == false){
             $scope.validateUser = "Login"

            $scope.error = response.message;
            $timeout(function () { $scope.error = ''; }, 5000);
          }
          else{
            AuthenticationService.SetCredentials($scope.username, response.id, response);
            $location.path('/dashboard');
          }

        }
      );
    };

}]);
