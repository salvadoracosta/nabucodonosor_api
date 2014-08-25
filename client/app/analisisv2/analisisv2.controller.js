'use strict';
//simentalesputo
angular.module('nabuApp')
  .controller('Analisisv2Ctrl', function ($scope, $http, socket) {
    $scope.message = 'Simen es puto';
	$scope.analisiss = [];

    $http.get('/api/analisisv2s').success(function(analisiss) {
		$scope.analisiss = analisiss;
		socket.syncUpdates('analisisv2', $scope.analisiss);

		$http.get('/api/labtests').success(function(labtests) {
	      $scope.labtests = labtests;
	      socket.syncUpdates('labtest', $scope.labtests);
	    });
    });



    $scope.funcion = function() {
    	console.log($scope);
    	$scope.message = 'Simen es MAS puto';
    	console.log($scope);
    }

     $scope.addAnalisis = function() {
      if($scope.paciente === '' || $scope.labtests === '') {
        return;
      }
      console.log($scope);
      $http.post('/api/analisisv2s', { paciente: $scope.paciente , labtests : $scope.labtests});
      $scope.paciente = '';
      //$scope.labtests = '';
      //$scope.active = '';
    };

    $scope.editAnalisis = function(analisis) {
    	console.log($scope);
    	$scope.edit = true;	
    	$scope.labtest = labtest;
      	$scope.user = labtest.user;
      	$scope.typeTest = labtest.type;
      	console.log($scope);
    };

   

    $scope.deleteAnalisis = function(analisis){
    	 $http.delete('/api/analisisv2s/' + analisis._id);
    };

  });
