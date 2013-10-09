'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['database', function(database) {
      return function(scope, elm, attrs) {
        elm.text(database.version);
      };
    }])
    .directive('resultView', [function() {
      return function(scope, elm, attrs) {
        var data = scope.resultSet.results[attrs.name];
        if (data) {
          console.log(data);
          elm.html('result view driv');
        }


      };
    }]);
