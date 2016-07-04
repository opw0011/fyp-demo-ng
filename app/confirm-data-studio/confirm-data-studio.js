'use strict';

angular.module('myApp.confirm-data-studio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/confirm-data-studio', {
    templateUrl: 'confirm-data-studio/confirm-data-studio.html',
    controller: 'ConfirmDataStudioCtrl'
  });
}])

.controller('ConfirmDataStudioCtrl', [function() {

}]);