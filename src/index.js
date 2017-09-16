const angular = require('angular');
let parking = angular.module('parking', []);

parking.controller('parkingCtrl', function ($scope) {
    console.log('test')
    $scope.cars = [
        { plate: '123A' },
        { plate: '1C3C' },
        { plate: '8F28' },
    ]

    $scope.park = function (car) {
        console.log('add new car, plate', car)
        $scope.cars.push(angular.copy(car))
        delete $scope.car;
    }
});