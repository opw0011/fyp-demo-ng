'use strict';

angular.module('myApp.show-nav-path', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show-nav-path/:action', {
    templateUrl: 'show-nav-path/show-nav-path.html',
    controller: 'ShowNavPathCtrl'
  });
}])

.controller('ShowNavPathCtrl', function($scope, $routeParams) {
  console.log($routeParams.action);
  $scope.action = $routeParams.action;

  // return url path after arrived
  $scope.getLink = function() {
    if($routeParams.action == "enter")
      return "#!arrive-park-lot";
    else if($routeParams.action == "exit")
      return "#!exit-park-lot";
    else
      return "#!";
  }

});