'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['database', function(database) {
    return function(scope, elm, attrs) {
      elm.text(database.version);
    };
  }]);
