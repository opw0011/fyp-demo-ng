'use strict';

angular.module('myApp.select-park-lot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/select-park-lot', {
    templateUrl: 'select-park-lot/select-park-lot.html',
    controller: 'SelectParkLotCtrl'
  });
}])

.controller('SelectParkLotCtrl', [function() {

}]);