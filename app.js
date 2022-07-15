(function () {
    'use strict';

    var app = angular.module('LunchCheck', []);

    app.controller('LunchCheckController', LunchCheckController);
        LunchCheckController.$inject = ['$scope'];
        
        function LunchCheckController($scope, $injector) {
        $scope.name;
        $scope.message;
        
        $scope.food = function () {
            if (!$scope.name) {
                $scope.message = "Please enter data first";
            }
            else {
                let nameSplit = $scope.name.split(" ");
                if (nameSplit.length <= 10) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                };
            };
        };

        console.log($injector.annotate(LunchCheckController));
    };
})();

