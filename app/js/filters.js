'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['database', function(database) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, database.version);
    }
  }]);
