'use strict';

angular.module('eoseriesApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.shows = [];

    $http.get('/api/shows').success(function(shows) {
      $scope.shows = shows;
      $scope.name = "caca";
    });
  });
