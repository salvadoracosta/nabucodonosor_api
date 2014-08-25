'use strict';

angular.module('nabuApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('analisisv2', {
        url: '/analisisv2',
        templateUrl: 'app/analisisv2/analisisv2.html',
        controller: 'Analisisv2Ctrl'
      });
  });