'use strict';

/* Services */

// Database service
angular.module('myApp.services', [])
    .value('version', ydn.db.version)
    .factory('utils', function() {
      /**
       * Insert a new row. If row already exists, it return.
       * @param {Array} rows
       * @param {string} platform
       * @param {string} browser
       * @param {string} version
       * @return {Object} inserted row.
       */
      var insertRow = function(rows, platform, browser, version) {
            var i = 0;
            for (i = 0; i < rows.length; i++) {
              if (rows[i].platform == platform) {
                if (rows[i].browser == browser) {
                  if (rows[i].version == version) {
                    return rows[i];
                  } else if (rows[i].version > version) {
                    break;
                  }
                } else if (rows[i].browser > browser) {
                  break;
                }
              } else if (rows[i].platform > platform) {
                break;
              }
            }
            var row = {
              platform: platform,
              browser: browser,
              version: version,
              results: {}
            };
            // console.log(i, platform, browser, version)
            rows.splice(i, 0, row);
            return row;
          };
      var normalizeSuiteName = function(name) {
        name = name.toLowerCase();
        if (name == 'iterator') {
          name = 'cursor';
        } else if (name == 'workflow') {
          name = 'transaction';
        }
        return name;
      };
      var addResult = function(row, suite_name, name, result) {
        if (!result) {
          return;
        }
        suite_name = normalizeSuiteName(suite_name);
        if (!row[suite_name]) {
          row[suite_name] = {};
        }
        var suite = row[suite_name];
        name = name.toLowerCase();
        if (!suite[name]) {
          suite[name] = [];
        }
        suite[name].push(result);
        // console.log(suite_name + ' ' + name + ' ' + suite[name].length);
      };
      var processResult = function(results) {
        var rows = [];
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
          var row = insertRow(rows, result.platform, result.browser, result.version);
          for (var j = 0; j < result.testResults.length; j++) {
            var suites = result.testResults[j].suites;
            if (!suites) {
              continue;
            }
            for (var k = 0; k < suites.length; k++) {
              var suite = suites[k];
              for (var m = 0; m < suite.specs.length; m++) {
                addResult(row.results, result.testResults[j].name, suite.name, suite.specs[m]);
              }
            }
          }
        }
        return rows;
      };
      return {
        insertRow: insertRow,
        processResult: processResult
      };
    })
    .factory('database', function() {
      var schema = {
        stores: [
          {
            name: 'ydn-db',
            indexes: [
              {
                keyPath: 'platform'
              },
              {
                keyPath: 'browser'
              },
              {
                keyPath: 'version'
              },
              {
                keyPath: ['platform', 'browser', 'version']
              }
            ],
            Sync: {
              format: 'gcs',
              metaDataName: 'meta',
              keepMeta: true,
              Options: {
                bucket: 'ydn-test-report-2',
                prefix: 'ydn-db/'
              }
            }
          }
        ]
      };
      return new ydn.db.Storage('feature-matrix', schema);
    })
    .factory('gapi', function($q, $rootScope) {

      var bucket = 'ydn-test-report-2';
      var getObject = function(name) {
        var path = 'http://' + bucket + '.storage.googleapis.com/' + name;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onload = function(e) {
          // console.log(e.target.response);
          // console.log(e.target.responseText);
          var obj = JSON.parse(e.target.responseText);
          console.log(obj);
          cb(obj);
        };
        xhr.send();
      };
      var list = function() {
        var df = $q.defer();
        var results = [];
        gapiLoader.onReady(function() {
          var req = gapi.client.storage.objects.list({
            'bucket': bucket,
            'prefix': 'ydn-db/0.8.2/',
            'maxResults': '10'
          });
          req.execute(function(json) {
            console.log(json);
            // Note: gapi client don't support rpc batch
            var qs = [];
            for (var i = 0; i < json.items.length; i++) {
              var path = 'http://' + bucket + '.storage.googleapis.com/' + json.items[i].name;
              // console.log(path);
              var xhr = new XMLHttpRequest();
              xhr.open('GET', path, true);
              xhr.onload = function(e) {
                // console.log(e.target.response);
                // console.log(e.target.responseText);
                var obj = JSON.parse(e.target.responseText);
                // console.log(obj);
                results.push(obj);
                df.notify(results);
                if (results.length >= json.items.length) {
                  df.resolve(results);
                  $rootScope.$apply();
                }
              };
              xhr.send();
            }
          });
        });
        // return db.values('ydn-db', null, 100, false);
        return df.promise;
      };
      return {
        list: list
      };
    });


