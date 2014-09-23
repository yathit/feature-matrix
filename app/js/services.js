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
      };
      var processResult = function(results) {
        var rows = [];
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
          if (!result) {
            continue;
          }
          var row = insertRow(rows, result.platform, result.browser, result.version);
          for (var j = 0; j < result.testResults.length; j++) {
            var suites = result.testResults[j].suites;
            if (!suites) {
              // console.log(result);
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
            Sync: {
              // 'gcs' refer to Google Cloud Storage backend
              // GCS has tow API, one for XML (S3) and one for JSON
              format: 'gcs',
              // immutable database
              immutable: true,
              // Name of store, where meta data are stored.
              Options: {
                // GCS bucket name
                bucket: 'ydn-test-report-2'
              }
            }
          }, {
            name: 'ydn-db-meta',
            // require keyPath for GCS-JSON meta store
            keyPath: 'name',
            // index meta data in the header
            indexes: [
              {
                // x-goog-meta-platform
                keyPath: 'platform'
              }, {
                // x-goog-meta-browser
                keyPath: 'browser'
              }, {
                // x-goog-meta-version
                keyPath: 'version'
              }, {
                // required index for meta store.
                keyPath: 'etag'
              }, {
                // required index for meta store.
                keyPath: 'updated'
              },
              {
                // use compound index, so that we can query unique quickly
                name: 'platform, browser',
                keyPath: ['metadata.platform', 'metadata.browser']
              },
              {
                // use compound index, so that we can query unique quickly
                name: 'platform, browser, version',
                keyPath: ['metadata.platform', 'metadata.browser', 'metadata.version']
              }],
            Sync: {
              // 'gcs' refer to Google Cloud Storage backend
              // 'gcs-meta' sync option format store only meta data of the
              // object. The key must be generate in descending order.
              format: 'gcs-meta',
              // prefetch only 'meta', other possible is 'full'
              // 'meta' is default for 'gcs-meta' sync format.
              prefetch: 'meta',
              // Prefetch refractory period interval in milliseconds.
              // Default is 5000.
              prefetchRefractoryPeriod: 60 * 1000,
              Options: {
                // GCS bucket name
                bucket: 'ydn-test-report-2',
                // path prefix for this store.
                prefix: 'ydn-db/'
              }
            }
          }]
      };
      return new ydn.db.Storage('feature-matrix', schema);
    })
    .factory('gapi', ['$q', '$rootScope', function($q, $rootScope) {
      var df = $q.defer();
      gapiLoader.onReady(function() {
        df.resolve();
        $rootScope.$apply();
      });
      return df.promise;
    }]);


