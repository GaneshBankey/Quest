(function(define, require) {
    'use strict';

    var baseUrl = require.toUrl('common');

    define(['angular'], function(angular) {

        var modulename = 'questTopnav';
        var module = angular.module(modulename, []);

        var questTopnav = function($rootScope, $location) {

            // Return configured, directive instance
            return {
                restrict: 'E',
                link: function($scope) {
                    $rootScope.$on('$routeChangeSuccess', function() {
                        $scope.url = $location.url().slice(1);
                    });
                    $scope.url = '';
                    $scope.switchTo = function(url) {
                        $scope.url = url;
                    };
                },
                templateUrl: baseUrl + '/questTopnav/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$rootScope', '$location', questTopnav]);


        return {
            name: modulename
        };

    });

}(define, require));