(function(define) {
    'use strict';

    define([
        'angular',
        'features/employer/router/Routes',
        'features/employer/controller/EmployerController',
        'features/employer/service/EmployerFactory'
    ], function(angular,
        Routes,
        EmployerController,
        EmployerFactory) {

            var moduleName = 'employer';

            var module = angular.module(moduleName, []);

            module.controller('EmployerController', EmployerController);
            module.factory('EmployerFactory', EmployerFactory);

            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));