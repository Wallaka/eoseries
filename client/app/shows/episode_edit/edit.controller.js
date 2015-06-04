"use strict";

angular.module("eoseriesApp").controller("EpisodeEditCtrl", function($scope, $http, $stateParams, $location) {
  $http.get("/api/episodes/" + $stateParams.show_id + "/" + $stateParams.episode_id).success(function(episodes) {
    $scope.season_number = episodes[0].season_number;
    $scope.episode_number = episodes[0].episode_number;
    $scope.episode_name = episodes[0].episode_name;
    $scope.duration_time = episodes[0].duration_time;
    $scope.synopsis = episodes[0].synopsis;
  });

  $scope.editEpisode = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      $http.put("/api/episodes/" + $stateParams.show_id + "/" + $stateParams.episode_id, {season_number: parseInt($scope.season_number), episode_number: parseInt($scope.episode_number), episode_name: $scope.episode_name, duration_time: parseInt($scope.duration_time), synopsis: $scope.synopsis})
        .then(function() {
          $location.path("/episodes/delete/" + $stateParams.show_id);
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
    }
  };
});
