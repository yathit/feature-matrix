'use strict';

/* Controllers */

var getSortedRow = function(rows, platform, browser, version) {
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
    } else if (rows[i].platform == platform) {
      break;
    }
  }
  var row = {
    platform: platform,
    browser: browser,
    version: version,
    results: []
  };
  console.log(i);
  rows.splice(i, 0, row);
  return row;
};

var processResult = function(results) {
  var rows = [];
  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    for (var j = 0; j < result.testResults.length; j++) {
      var suites = result.testResults[j].suites;
      for (var k = 0; k < suites.length; k++) {
        var rs = suites[k];
        rs.platform = result.platform;
        rs.browser = result.browser;
        rs.version = result.version;
        rs.suite = result.testResults[j].name;
        console.log(rs);
      }
    }
  }
  return rows;
};

angular.module('myApp.controllers', [])
    .controller('AboutCtrl', [function() {

    }])
    .controller('MyResultCtrl', ['$scope', 'database', function($scope, database) {

      // console.log(database.sampleData);
      $scope.results = []; // processResult(database.sampleData);
      // console.log($scope.results);
    }])
    .controller('HomeCtrl', ['$scope', 'database', function($scope, database) {

    }]);
