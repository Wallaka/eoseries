"use strict";

angular.module("eoseriesApp").controller("EpisodeDeleteCtrl", function($scope, $http, $stateParams) {
  $scope.episodes = [];

  $http.get("/api/episodes/" + $stateParams.show_id).success(function(episodes) {
    $scope.episodes = episodes;
  });

  $scope.addEpisode = function(form) {
    $scope.submitted = true;

    if (form.$valid) {
      $http.post("/api/episodes/", {show_id: $stateParams.show_id, season_number: parseInt($scope.season_number), episode_number: parseInt($scope.episode_number), episode_name: $scope.episode_name, duration_time: parseInt($scope.duration_time), synopsis: $scope.synopsis})
        .then(function() {
          $http.get("/api/episodes/" + $stateParams.show_id).success(function(episodes) {
            $scope.episodes = episodes;
          });
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
    }
  };

  $scope.delete = function(episode) {
    $http.delete("/api/episodes/" + $stateParams.show_id + "/" + episode.episode_id).success(function() {
      $http.get("/api/episodes/" + $stateParams.show_id).success(function(episodes) {
        $scope.episodes = episodes;
      });
    });
  };
});
