'use strict';

/* Controllers */


angular.module('myApp.controllers', [])
    .controller('AboutCtrl', [function() {

    }])
    .controller('MyResultCtrl', ['$scope', 'utils', function($scope, utils) {
      var data = localStorage['test-ydn-db::results'];
      if (data) {
        var json = JSON.parse(data);
        $scope.results = utils.processResult(json);
      }

    }])
    .controller('HomeCtrl', ['$scope', 'utils', 'database', 'gapi', function($scope, utils, database, gapi) {
      var req = database.values('ydn-db', null, 10);
      req.progress(function(json) {
        // console.log(json);
        $scope.results = utils.processResult(json);
      }, this);
      req.then(function(json) {
        // console.log(json);
        $scope.results = utils.processResult(json);
      }, function(e) {
        throw e;
      }, this);

    }])
    .controller('GapiCtrl', ['$scope', 'utils', 'database', 'gapi', function($scope, utils, database, gapi) {
      var promise = gapi.list();
      promise.then(function(json) {
        // console.log(json);
        $scope.results = utils.processResult(json);
      }, function(e) {
        throw e;
      }, function(json) {
        // console.log(json);
        $scope.results = utils.processResult(json);
      }, this);
    }]);

