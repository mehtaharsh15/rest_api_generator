'use strict';

angular.module('MyLoci')

.factory('DashboardService',
    ['$rootScope', '$http', '$timeout',
    function ($rootScope, $http, $timeout) {
        var service = {};

        // service.userData = function (data, callback) {

        //     $http.get($rootScope.apiLink +'recruiter/'+recruiterId+'/dashboard', {"params":data})
        //        .success(function (response) {
        //             console.log(response)
        //            callback(response);
        //        })
        //        .error(function(response){
        //         callback({"success":false, "message":"Server Error"})
        //        });

        // };
        return service;
    }
]);
