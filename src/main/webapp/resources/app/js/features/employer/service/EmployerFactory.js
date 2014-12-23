(function() {
    'use strict';

    define([], function() {
        var factory = function() {
            var getEmployer = function() {
                return [{
                    name: 'firstName'
                    }, {
                    name: 'LastName'
                    }, {
                    name: 'Age'
                }];
            };

            return {
            	getEmployer: getEmployer
            };

        };


        return [factory];
    });
}());