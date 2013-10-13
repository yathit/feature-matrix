'use strict';

/* Controllers */


angular.module('myApp.controllers', [])
    .controller('AboutCtrl', [function() {

    }])
    .controller('MyResultCtrl', ['$scope', 'utils', function($scope, utils) {
      var data = localStorage['test-ydn-db::results'];
      if (data) {
        var json = JSON.parse(data);
        $scope.results = json;
      }

    }])
    .controller('HomeCtrl', ['$scope', 'utils', 'database', function($scope, utils, db) {
      var index_name = 'platform, browser';
      var key_range = null;
      var limit = 50;
      var offset = 0;
      var reverse = false;
      var unique = true;
      db.keys('ydn-db-meta', index_name, key_range, limit, offset, reverse, unique)
          .then(function(keys) {
            var req = db.values('ydn-db', keys);
            req.then(function(json) {
              // console.log(json);
              $scope.results = utils.processResult(json);
              // console.log($scope.results);
              $scope.$apply();
            }, function(e) {
              throw e;
            }, this);
          });
    }])
    .controller('DetailCtrl', ['$scope', '$routeParams', 'utils', 'database',
      function($scope, params, utils, db) {
        if (!params.platform || !params.browser || !params.module) {
          return;
        }
        var index_name = 'platform, browser';
        var key_range = ydn.db.KeyRange.only([params.platform, params.browser]);
        var limit = 50;
        var offset = 0;
        var reverse = false;
        var unique = false;
        db.keys('ydn-db-meta', index_name, key_range, limit, offset, reverse, unique)
            .then(function(keys) {
              var req = db.values('ydn-db', keys);
              req.then(function(json) {
                // console.log(json);
                var versions = [];
                var rows = {};
                for (var i = 0; i < json.length; i++) {
                  versions[i] = json[i].version;
                  for (var j = 0; j < json[i].testResults.length; j++) {
                    var result = json[i].testResults[j];
                    if (result.name == params.module) {
                      var suites = result.suites;
                      for (var k = 0; k < suites.length; k++) {
                        for (var m = 0; m < suites[k].specs.length; m++) {
                          var spec = suites[k].specs[m];
                          var key = suites[k].name.toLowerCase() + '-' + spec.description;
                          if (!rows[key]) {
                            rows[key] = {
                              suite: suites[k].name,
                              key: key,
                              description: spec.description,
                              cols: []
                            };
                          }
                          var cols = rows[key].cols;
                          var status = spec.passedCount == spec.totalCount ? 'passed' : 'failed';
                          cols.push({
                            status: status,
                            passedCount: spec.passedCount,
                            totalCount: spec.totalCount
                          });
                        }
                      }
                    }
                  }
                }
                var sortedRows = [];
                for (var key in rows) {
                  sortedRows.push(rows[key]);
                }
                sortedRows.sort(function (a, b) {
                  return a.key > b.key ? 1 : -1;
                });
                for (var i = sortedRows.length - 2; i >= 0; i--) {
                  if (sortedRows[i + 1].suite == sortedRows[i].suite) {
                    sortedRows[i + 1].suite = '';
                  }
                }
                $scope.detail = {
                  platform: params.platform,
                  browser: params.browser,
                  module: params.module,
                  versions: versions,
                  rows: sortedRows
                };
                // console.log($scope.detail);
                $scope.$apply();
              }, function(e) {
                throw e;
              }, this);
            });
      }]);

