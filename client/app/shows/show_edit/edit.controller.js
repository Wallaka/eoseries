"use strict";

angular.module("eoseriesApp").controller("ShowEditCtrl", function($scope, $http, $stateParams, $location) {
  $http.get("/api/shows/" + $stateParams.show_id).success(function(shows) {
    $scope.name = shows[0].name;
    $scope.synopsis = shows[0].synopsis;
    $scope.status = shows[0].status;
    $scope.network = shows[0].network;
    $scope.genre = shows[0].genre;
  });

  $scope.editShow = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      $http.put("/api/shows/" + $stateParams.show_id, {name: $scope.name, synopsis: $scope.synopsis, status: $scope.status, network: $scope.network, genre: $scope.genre})
        .then(function() {
          $location.path("/shows/delete");
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
    }
  };
});
