(function(define) {
    'use strict';

    define([
        'angular',
        'features/student/router/Routes',
        'features/student/controller/StudentController',
        'features/student/service/StudentFactory'
    ], function(angular,
        Routes,
        StudentController,
        StudentFactory) {

            var moduleName = 'student';

            var module = angular.module(moduleName, []);

            module.controller('StudentController', StudentController);
            module.factory('StudentFactory', StudentFactory);

            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));