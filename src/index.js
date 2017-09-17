const angular = require('angular')
require('angular-sanitize')

// import css, less, scss
require('../styles/homepage.scss')

let parking = angular.module('parking', ["ngSanitize"]);

parking.controller('parkingCtrl', function ($scope) {
    console.log('test')
    $scope.cars = [
        // { plate: '123A', entrance: 'test1' },
        // { plate: '1C3C', entrance: 'test2' },
        // { plate: '8F28', entrance: 'test3' },
        // { plate: 'S3DF', entrance: 'test4' },
        // { plate: '83DA', entrance: 'test5' }
    ]

    $scope.appTitle = "<b>Parking</b>"

    $scope.park = function (car) {
        car.entrance = new Date()
        $scope.cars.push(angular.copy(car))
        delete $scope.car
    }

});