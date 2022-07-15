(function () {
    'use strict';

angular.module('LunchCheck', [])
    .controller ('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope, $injector) {
    $scope.name = "Yaakov";
    
    console.log($injector.annotate(LunchCheckController()));
}

})();

