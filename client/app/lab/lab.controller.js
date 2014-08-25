'use strict';

angular.module('nabuApp')
  .controller('LabCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.awesomeThings = [];
    /*
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
*/
  });
