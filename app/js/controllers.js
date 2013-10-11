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
    .controller('HomeCtrl', ['$scope', 'utils', 'database', function($scope, utils, db) {
      var index_name = 'platform, browser';
      var key_range = null;
      var limit = 200;
      var offset = 0;
      var reverse = false;
      var unique = true;
      db.keys('ydn-db-meta', index_name, key_range, limit, offset, reverse, unique)
          .then(function(keys) {
            console.log(keys);
            var req = db.values('ydn-db', keys);
            req.then(function(json) {
              console.log(json);
              $scope.results = utils.processResult(json);
              // console.log($scope.results);
              $scope.$apply();
            }, function(e) {
              throw e;
            }, this);
          });
    }])
    .controller('GapiCtrl', ['$scope', 'utils', 'gapi', function($scope, utils, gapi) {
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

