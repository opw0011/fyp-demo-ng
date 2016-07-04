'use strict';

angular.module('myApp.use-app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/use-app', {
    templateUrl: 'use-app/use-app.html',
    controller: 'UseAppCtrl'
  });
}])

.controller('UseAppCtrl', [function() {

}]);