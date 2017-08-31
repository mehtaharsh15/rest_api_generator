'use strict';
 
angular.module('header')
 
.controller('headerController',
  ['$scope', '$rootScope', '$location','$cookieStore',
  function ($scope, $rootScope, $location, $cookieStore) {
        $scope.isActive = function (viewLocation) {

            if($cookieStore.get('globals')){
                var globals =  $cookieStore.get('globals')
        	$scope.userName = globals.currentUser.name;
        return viewLocation === $location.path();
            }
        	
    };
    // reset login status
    $scope.logout = function(){
        $cookieStore.remove("globals");
         $cookieStore.remove("url");
        $location.path('/login');
    }
  
}]);