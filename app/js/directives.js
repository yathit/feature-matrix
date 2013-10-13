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
          elm.attr('href', '#/home/' + scope.resultSet.platform + '/' +
              scope.resultSet.browser + '/' + attrs.name);
          var red = Math.ceil(255 * failedCount / total);
          var green = Math.ceil(255 * passedCount / total);
          var blue = 0;
          // console.log(failedCount, passedCount, red, green, blue);
          elm[0].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
          //scope.color = 'background-color: rgb(' + red + ',' + green + ',' + blue + ')';
        }
      };
    }]);
