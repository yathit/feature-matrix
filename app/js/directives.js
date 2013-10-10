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
        var specs = scope.resultSet.results[attrs.name];
        // console.log(scope.resultSet.results, attrs.name, specs);
        if (specs) {
          var failedCount = 0;
          var passedCount = 0;
          for (var name in specs) {
            var results = specs[name];
            for (var i = 0; i < results.length; i++) {
              failedCount += results[i].failedCount;
              passedCount += results[i].passedCount;
            }
          }
          var total = failedCount + passedCount;
          elm.text(passedCount + '/' + total);
          var red = Math.ceil(255 * failedCount / total);
          var green = Math.ceil(255 * passedCount / total);
          var blue = 0;
          scope.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        }


      };
    }]);
