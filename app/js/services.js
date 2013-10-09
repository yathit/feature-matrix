'use strict';

/* Services */

// Database service
angular.module('myApp.services', [])
    .value('version', '0.1')
    .factory('database', function() {
      /*
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
            ]
          }
        ]
      };
      var db = new ydn.db.Storage('feature-matrix', schema);
      db.addEventListener('ready', function(e) {

      }, false, this);
      */
      return {
        version: ydn.db.version,
        db: null
      };
    });
