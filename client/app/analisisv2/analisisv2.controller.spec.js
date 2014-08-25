'use strict';

describe('Controller: Analisisv2Ctrl', function () {

  // load the controller's module
  beforeEach(module('nabuApp'));

  var Analisisv2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Analisisv2Ctrl = $controller('Analisisv2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
