'use strict';

/* Services */

// Database service
angular.module('myApp.services', [])
    .factory('database', function() {
      var schema = {
        stores: [{
          name: 'ydn-db',
          indexes: [{
            keyPath: 'platform'
          }, {
            keyPath: 'browser'
          }]
        }]
      };
      var db = new ydn.db.Storage('feature-matrix', schema);
      db.addEventListener('ready', function(e) {

      }, false, this);
      var data = [
        {"testResults":[{"testSuite":"crud","version":"Put","start":1381216017607,"modules":[{"description":"Put","start":1381216017884,"specs":[{"description":"single data","duration":112,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"inline-key autoincrement","duration":29,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2},{"description":"data with off-line-key","duration":29,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2},{"description":"offline-key autoincrement","duration":29,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2},{"description":"nested key","duration":33,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"single data - array index key","duration":33,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2},{"description":"array put with ConstraintError","duration":34,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3}],"end":1381216018075},{"description":"Clear","start":1381216018115,"specs":[{"description":"by store","duration":39,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3},{"description":"by database","duration":43,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3}],"end":1381216018159},{"description":"Remove","start":1381216018204,"specs":[{"description":"by id","duration":44,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3},{"description":"by key range","duration":35,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3}],"end":1381216018240},{"description":"Get","start":1381216018272,"specs":[{"description":"inline-key number","duration":31,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"inline-line string key","duration":34,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"out-off-line number key","duration":45,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"out-off-line string key","duration":36,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1}],"end":1381216018390},{"description":"Values","start":1381216018450,"specs":[{"description":"Retrieve all objects from a store - inline key","duration":48,"passed":true,"passedCount":7,"failedCount":0,"totalCount":7},{"description":"Retrieve objects by index key","duration":38,"passed":true,"passedCount":5,"failedCount":0,"totalCount":5},{"description":"Retrieve objects by key list - inline-key","duration":34,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3},{"description":"Retrieve objects from a store - out-of-line key","duration":50,"passed":true,"passedCount":4,"failedCount":0,"totalCount":4},{"description":"Retrieve objects by keys from multiple stores","duration":40,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3},{"description":"Retrieve objects by multiEntry key","duration":44,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1}],"end":1381216018660},{"description":"Keys","start":1381216018700,"specs":[{"description":"from a store","duration":35,"passed":true,"passedCount":3,"failedCount":0,"totalCount":3},{"description":"Retrieve primary key by index key","duration":45,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2}],"end":1381216018746},{"description":"Count","start":1381216018784,"specs":[{"description":"all records in a store","duration":37,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"all records in a out-of-line store","duration":38,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1},{"description":"all records in stores","duration":40,"passed":true,"passedCount":2,"failedCount":0,"totalCount":2},{"description":"in a key range","duration":39,"passed":true,"passedCount":1,"failedCount":0,"totalCount":1}],"end":1381216018903}]}],"library":"ydn-db","date":"2013-10-08T07:06:58.913Z","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36","platform":"MacIntel","platformVersion":"10.8.4","browser":"Chrome","browserVersion":"537.36","mobile":false}
      ];
      return {
        version: ydn.db.version,
        sampleData: data,
        db: db
      };
    });
