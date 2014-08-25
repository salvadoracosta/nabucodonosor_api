'use strict';
//simentalesputo
angular.module('nabuApp')
  .controller('Analisisv2Ctrl', function ($scope, $http, socket) {
    $scope.message = 'Simen es puto';
	$scope.analisiss = [];

    $http.get('/api/analisisv2s').success(function(analisis) {
		$scope.analisis = analisis;
		socket.syncUpdates('analisis', $scope.analisis);
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
      $http.post('/api/analisisv2s', { paciente: $scope.paciente , labtests : $scope.labtests});
      $scope.paciente = '';
      $scope.labtests = '';
      //$scope.active = '';
    };

    $scope.deleteAnalisis = function(analisis){
    	 $http.delete('/api/analisisv2s/' + analisis._id);
    };

  });
