'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/my-result', {templateUrl: 'partials/my-result.html', controller: 'MyResultCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

var handleClientLoad = function() {
  gapi.client.setApiKey('AIzaSyCJiBR1-tmt0Pp2yhBo8P7g6FqY2q_S7F8');
  gapi.client.load('storage', 'v1beta2', function() {
    console.log('ready')
  });
};
