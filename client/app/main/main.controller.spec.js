'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('eoseriesApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/shows')
      .respond(
      [
        {
          "show_id": "24",
          "name": "24",
          "_id": "551d0bd57beeec0618157183"
        },
        {
          "show_id": "thewalkingdead",
          "name": "The Walking Dead",
          "_id": "551d0bd57beeec0618157184"
        },
        {
          "show_id": "heroes",
          "name": "Heroes",
          "_id": "551d0bd57beeec0618157185"
        },
        {
          "show_id": "arrow",
          "name": "Arrow",
          "_id": "551d0bd57beeec0618157186"
        },
        {
          "show_id": "theflash",
          "name": "The Flash (2014)",
          "_id": "551d0bd57beeec0618157187"
        }
      ]
    );

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of shows to the scope', function () {
    $httpBackend.flush();
    expect(scope.shows.length).toBe(5);
  });
});

