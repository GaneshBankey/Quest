(function() {
    'use strict';

    define([], function() {
        var factory = function() {
            var getStudent = function() {
                return [{
                    name: 'firstName'
                    }, {
                    name: 'LastName'
                    }, {
                    name: 'Age'
                }];
            };

            return {
                getStudent: getStudent
            };

        };


        return [factory];
    });
}());