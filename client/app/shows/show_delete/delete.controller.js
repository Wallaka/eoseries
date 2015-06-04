"use strict";

angular.module("eoseriesApp").controller("ShowDeleteCtrl", function($scope, $http) {
  $scope.shows = [];

  $http.get("/api/shows").success(function(shows) {
    $scope.shows = shows;
  });

  $scope.delete = function(show) {
    $http.delete("/api/shows/" + show.show_id).success(function() {
      $http.get("/api/shows").success(function(shows) {
        $scope.shows = shows;
        $alert({
          content: "Show removed.",
          placement: "top-right",
          type: "success",
          duration: 5
        });
      });
    });
  };

  $scope.addShow = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      $http.post("/api/shows", {name: $scope.name})
        .then(function() {
          $http.get("/api/shows").success(function(shows) {
            $scope.shows = shows;
          });
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
    }
  };
});
