(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: true,
            when: '/student',
            controller: 'StudentController',
            templateUrl: features + '/student/partials/student.html'
        }];
    });

}(define, require));