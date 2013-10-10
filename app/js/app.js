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
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'GapiCtrl'});
    $routeProvider.when('/my-result', {templateUrl: 'partials/my-result.html', controller: 'MyResultCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);


/**
 * I have done with angular.$q shit. Here is MY way of doing promise, as well.
 */
var gapiLoader = (function() {
  var is_ready = false;
  var cbs = [];
  return {
    ready: function() {
      is_ready = true;
      var cb;
      while (cb = cbs.pop()) {
        cb();
      }
    },
    onReady: function(cb) {
      if (is_ready) {
        cb();
      } else {
        cbs.push(cb);
      }
    }
  };
})();

var handleClientLoad = function() {
  gapi.client.setApiKey('AIzaSyCJiBR1-tmt0Pp2yhBo8P7g6FqY2q_S7F8');
  gapi.client.load('storage', 'v1beta2', function() {
    gapiLoader.ready();
  });
};
