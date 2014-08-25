'use strict';

describe('Controller: LabCtrl', function () {

  // load the controller's module
  beforeEach(module('nabuApp'));

  var LabCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabCtrl = $controller('LabCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    $httpBackend.flush();
    expect(1).toEqual(1);
  });
});
