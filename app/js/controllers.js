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
    .controller('HomeCtrl', ['$scope', 'utils', 'database', function($scope, utils, database) {
      $scope.results = utils.processResult(simple_result_data);
      console.log($scope.results);
    }]);
