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
      return {
        version: ydn.db.version,
        db: db
      };
    });
