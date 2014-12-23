(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: true,
            when: '/employer',
            controller: 'EmployerController',
            templateUrl: features + '/employer/partials/employer.html'
        }];
    });

}(define, require));