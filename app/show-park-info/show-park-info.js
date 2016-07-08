'use strict';

angular.module('myApp.show-park-info', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show-park-info', {
    templateUrl: 'show-park-info/show-park-info.html',
    controller: 'ShowParkLotCtrl'
  });
}])

.controller('ShowParkLotCtrl', [function() {

}]);