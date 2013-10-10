'use strict';

/* Controllers */


angular.module('myApp.controllers', [])
    .controller('AboutCtrl', [function() {

    }])
    .controller('MyResultCtrl', ['$scope', 'utils', 'database', function($scope, utils, database) {

      // console.log(database.sampleData);
      $scope.results = utils.processResult(simple_result_data);
      // console.log($scope.results);
    }])
    .controller('HomeCtrl', ['$scope', 'utils', 'database', 'gapi', function($scope, utils, database, gapi) {
      gapi.list().then(function(json) {
        console.log(json);
        $scope.results = utils.processResult(json);
      });

    }]);
