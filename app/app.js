'use strict';
//TODO: rename show-nav-map to select-park-lot
//TODO: show-nav-path add one more url param (enter/exit)

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.use-app',
  'myApp.sign-in',
  'myApp.select-park-lot',
  'myApp.show-nav-path',
  'myApp.arrive-park-lot',
  'myApp.confirm-data-studio',
  'myApp.show-park-info',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/use-app'});
}]);
