'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.use-app',
  'myApp.sign-in',
  'myApp.show-nav-map',
  'myApp.show-nav-path',
  'myApp.confirm-data-studio',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/use-app'});
}]);
