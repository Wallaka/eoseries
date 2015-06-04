"use strict";

angular.module("eoseriesApp").controller("EpisodeDetailsCtrl", function($scope, $http, $stateParams, Auth, $state) {
  $scope.episodes = [];

  $scope.getCurrentUser = Auth.getCurrentUser;
  $scope.isLoggedIn = Auth.isLoggedIn;

  $http.get("/api/episodes/" + $stateParams.idShow + "/" + $stateParams.idEpisode).success(function(episodes)
  {
    $scope.episode = episodes[0];
    var total = episodes[0].notes.one_stars + episodes[0].notes.two_stars + episodes[0].notes.three_stars + episodes[0].notes.four_stars + episodes[0].notes.five_stars;
    var sous_note = (1 * episodes[0].notes.one_stars) + (2 * episodes[0].notes.two_stars) + (3 * episodes[0].notes.three_stars) + (4 * episodes[0].notes.four_stars) + (5 * episodes[0].notes.five_stars);
    var avg = sous_note / total;
    $scope.notes = 0;
    if (total == 0)
    {
      $scope.notes = 0;
    }
    else
    {
      $scope.notes = avg.toFixed(1);
    }

    if (episodes[0].episode_poster == "none")
    {
      $scope.episode.episode_poster = "http://www.pakistancardealers.com/img/no-image.jpg";
    }
  });

  $http.get("/api/comments/" + $stateParams.idShow + "/" + $stateParams.idEpisode).success(function(comments)
  {
    $scope.comments = comments;
    if (comments[0] == undefined)
    {
      $scope.hasNoComments = true;
    }
  });

  $scope.addEpisode = function(form)
  {
    if (form.$valid)
    {
      $http.post("/api/comments/", {content: $scope.content, author: Auth.getCurrentUser().name, show_id : $stateParams.idShow, episode_id : $stateParams.idEpisode })
        .then(function()
        {
          $state.go($state.$current, null, { reload: true });
        })
        .catch(function(err)
        {
          $scope.errors.other = err.message;
        });
    }
  };
});
