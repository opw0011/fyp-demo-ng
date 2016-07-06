'use strict';

angular.module('myApp.show-nav-map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show-nav-map', {
    templateUrl: 'show-nav-map/show-nav-map.html',
    controller: 'ShowNavMapCtrl'
  });
}])

.controller('ShowNavMapCtrl', [function() {

}]);