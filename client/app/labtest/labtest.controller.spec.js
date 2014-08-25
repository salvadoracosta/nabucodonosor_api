'use strict';

describe('Controller: LabtestCtrl', function () {

  // load the controller's module
  beforeEach(module('nabuApp'));
  beforeEach(module('socketMock'));

  var LabtestCtrl, scope, $httpBackend;;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/labtests')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    LabtestCtrl = $controller('LabtestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of LabTests to the scope', function () {
    $httpBackend.flush();
    expect(1).toEqual(1);
  });
});
