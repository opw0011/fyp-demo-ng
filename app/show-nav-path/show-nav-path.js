'use strict';

angular.module('myApp.show-nav-path', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show-nav-path', {
    templateUrl: 'show-nav-path/show-nav-path.html',
    controller: 'ShowNavPathCtrl'
  });
}])

.controller('ShowNavPathCtrl', [function() {

}]);