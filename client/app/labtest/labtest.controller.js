'use strict';

angular.module('nabuApp')
  .controller('LabtestCtrl', function ($scope, $http, socket) {
    //$scope.message = 'Hello';
    $scope.labtests = [];
    $scope.edit = false;	
    console.log($scope);
    $http.get('/api/labtests').success(function(labtests) {
      $scope.labtests = labtests;
      socket.syncUpdates('labtest', $scope.labtests);
    });

    $scope.addLabTest = function() {
      if($scope.user === '' || $scope.typeTest === '') {
        return;
      }
      $http.post('/api/labtests', { user: $scope.user , type : $scope.typeTest, active : true});
      $scope.user = '';
      $scope.typeTest = '';
      //$scope.active = '';
    };

    $scope.editTest = function(labtest) {
    	console.log($scope);
    	$scope.edit = true;	
    	$scope.labtest = labtest;
      	$scope.user = labtest.user;
      	$scope.typeTest = labtest.type;
      	console.log($scope);
    };

    $scope.cancel = function() {
    	console.log($scope);
    	$scope.edit = false;
    	$scope.user = '';
      	$scope.typeTest = '';	
      	
    };

    $scope.save = function(labtest) {
    	//console.log(labtest);
    	//labtest.user = $scope.user;
    	//labtest.type = $scope.typeTest;
    	//console.log(labtest);
    	$http.put('/api/labtests/' + labtest._id, { user: $scope.user ,  type : $scope.typeTest});
    };

    $scope.deleteLabTest = function(labtest) {
      $http.delete('/api/labtests/' + labtest._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('labtest');
    });
  });
