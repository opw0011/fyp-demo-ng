'use strict';

angular.module('myApp.arrive-park-lot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/arrive-park-lot', {
    templateUrl: 'arrive-park-lot/arrive-park-lot.html',
    controller: 'ArriveParkLotCtrl'
  });
}])

.controller('ArriveParkLotCtrl', [function() {

}]);