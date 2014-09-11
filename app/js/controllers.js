'use strict';

/* Controllers */


angular.module('myApp.controllers', [])
    .controller('AboutCtrl', [function() {

    }])
    .controller('AllTestCtrl', ['$scope', 'utils', function($scope) {
      var test_files = [
        'is-crud.html',
        'isw-core-cur.html',
        'isw-core.html',
        'is-core-e-cur-qry-text-dev.html',
        'isw-crud.html',
        'isw-query-e-dev.html',
        'isw-query.html',
        'isw-sql-e-dev.html',
        'isw-sql.html',
        'iswu-crud-e-dev.html',
        'iswu-crud.html'];
      var base_url = '/ydn-db-sync/test/ydn-db/';
      var inject = function() {
        var fn = test_files.pop();
        if (!fn) {
          return;
        }
        localStorage.removeItem('test-ydn-db::results');
        var node = document.createElement('iframe');
        node.width = '100%';
        node.height = '1000px';
        node.setAttribute('frameborder', '0');
        node.src = base_url + fn;
        var a = document.createElement('div');
        a.style.cursor = 'pointer';
        a.onclick = function(e) {
          node.style.display = !node.style.display ? 'none' : '';
          e.preventDefault();
        };
        a.textContent = fn;
        a.href = '#' + fn;
        document.body.appendChild(a);
        document.body.appendChild(node);
        node.style.display = 'none';
        return node;
      };
      var results = {};
      window.addEventListener('storage', function(e) {
        if (e.key == 'test-ydn-db::results') {
          var name = e.url.match(/[^\/]+\.html/)[0];
          var value = JSON.parse(e.newValue);
          var passed = 0;
          var failed = 0;
          var fl = [];
          var pl = [];
          for (var k in value) {
            for (var i = 0; i < value[k].suites.length; i++) {
              var specs = value[k].suites[i].specs;
              var ps = '';
              for (var j = 0; j < specs.length; j++) {
                passed += specs[j].passedCount;
                failed += specs[j].failedCount;
                if (!specs[j].passed) {
                  console.log(ps = specs[j]);
                  ps = specs[j].description;
                }
              }
              if (ps) {
                fl.push(value[k].name + ',' + value[k].suites[i].name + ' ' + ps);
              }
            }
          }
          results[name] = {
            url: e.url,
            passedCount: passed,
            failedCount: failed,
            failedLabel: fl.join(', '),
            passedLabel: pl.join(', '),
            totalCount: passed + failed,
            passed: failed == 0,
            failed: failed != 0,
            label: failed == 0 ? 'passed' : 'failed'
          };
          // console.log(results);
          $scope.results = results;
          $scope.$apply();
          inject();
        }
      }, false);
      inject();
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
                  versions[i] = {
                    url: 'http://ydn-test-report-2.storage.googleapis.com/' + keys[i],
                    value: json[i].version
                  };
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
                sortedRows.sort(function(a, b) {
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

