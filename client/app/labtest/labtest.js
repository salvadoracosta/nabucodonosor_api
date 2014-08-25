'use strict';

angular.module('nabuApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('labtest', {
        url: '/labtest',
        templateUrl: 'app/labtest/labtest.html',
        controller: 'LabtestCtrl'
      });
  });