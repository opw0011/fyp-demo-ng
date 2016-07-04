'use strict';

angular.module('myApp.sign-in', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign-in', {
    templateUrl: 'sign-in/sign-in.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', [function() {

}]);