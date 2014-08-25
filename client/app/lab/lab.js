'use strict';

angular.module('nabuApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lab', {
        url: '/lab',
        templateUrl: 'app/lab/lab.html',
        controller: 'LabCtrl'
      });
  });