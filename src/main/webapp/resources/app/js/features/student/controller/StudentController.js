(function(define) {
    'use strict';

    define(['lodash'], function(_) {

        var StudentController = function($scope, StudentFactory) {
            $scope.finNum = 0;
            $scope.title = 'Student Registration';
            $scope.student = StudentFactory.getStudent();

            /*$scope.toggleTask = function(task) {

                if (task.isActive) {
                    task.isActive = false;
                    task.checked = false;
                    return;
                }
                _.each($scope.tasks, function(t) {
                    _.assign(t, {
                        isActive: false
                    });
                });
                _.find($scope.tasks, function(t) {
                    return t.name === task.name;
                }).isActive = true;
                task.checked = true;
            };

            $scope.$watch('tasks', function(newTasks) {
                $scope.finNum = _.filter(newTasks, function(task) {
                    return task.checked;
                }).length;

            }, true);*/
        };

        return ['$scope', 'StudentFactory', StudentController];

    });

})(define);