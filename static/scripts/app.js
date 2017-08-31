'use strict';

// declare modules
angular.module('Authentication', ['ngBootbox']);
angular.module('header', []);

angular.module('MyLoci', [
    'Authentication',

    'header',
    'ngRoute',
    'ngCookies'
])


.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            // controller: 'LoginController',
            templateUrl: 'static/modules/authentication/views/login.html'
        })
        // .when('/dashboard', {
        //     controller: 'DashboardController',
        //     templateUrl: 'static/modules/dashboard/views/index.html'
        // })

        // .otherwise({ redirectTo: '/dashboard' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http', 'AuthenticationService',
    function ($rootScope, $location, $cookieStore, $http, AuthenticationService) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.apiLink  = $cookieStore.get('url') || {};


        if ($cookieStore.get('globals')) {
            $http.defaults.headers.common['token'] = $cookieStore.get('globals').Authorization.token; // jshint ignore:line
            // AuthenticationService.Authorization.token = $rootScope.globals.currentUser.role
         //   $location.path('/dashboard');

        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if($location.path() == '/register'){
                $rootScope.globals = ""
                $location.path('/register');
                return;
            }
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
                return;
            }
        });
    }]);

