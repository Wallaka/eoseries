"use strict";

angular.module("eoseriesApp").controller("ShowsDetailsCtrl", function($scope, $http, $stateParams, Auth, $state) {
  $scope.shows = [];

  $scope.getCurrentUser = Auth.getCurrentUser;
  $scope.isLoggedIn = Auth.isLoggedIn;

  $scope.rate = 0;
  $scope.max = 5;
  $scope.isReadonly = false;
  $scope.hasVoted = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.$watch('rate', function(newValue, oldValue)
  {
    if (newValue !== oldValue)
    {
      $http.patch("/api/shows/" + $stateParams.idShow + "/" + $scope.rate).then(function()
      {
        $scope.hasVoted= true;
        $scope.$apply(function(){
          $scope.hasVoted = true;
        });
      })
        .catch(function(err)
        {
          $scope.errors.other = err.message;
        });
    }
  });


  $scope.getTimes=function(n){
    return new Array(n);
  };

  $scope.changeCurrentSeason = function(n){
    $scope.current_season = n;
    $scope.$apply(function(){
      $scope.current_season = n;
    });
  };

  $http.get("/api/shows/" + $stateParams.idShow).success(function(shows)
  {
    $scope.show = shows[0];
    var total = shows[0].notes.one_stars + shows[0].notes.two_stars + shows[0].notes.three_stars + shows[0].notes.four_stars + shows[0].notes.five_stars;
    var sous_note = (1 * shows[0].notes.one_stars) + (2 * shows[0].notes.two_stars) + (3 * shows[0].notes.three_stars) + (4 * shows[0].notes.four_stars) + (5 * shows[0].notes.five_stars);
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

    if (shows[0].poster == "none")
    {
      $scope.show.poster = "http://www.pakistancardealers.com/img/no-image.jpg";
    }
  });

  $http.get("/api/episodes/" + $stateParams.idShow).success(function(episodes)
  {
    $scope.episodes = episodes;
    $scope.episodes.count_episodes = episodes.length;
    var count_seasons = 1;
    for (var i = 0;i < episodes.length;i++)
    {
      if (episodes[i].season_number > count_seasons)
      {
        count_seasons = episodes[i].season_number;
      }
    }
    $scope.episodes.count_seasons = count_seasons;
    $scope.current_season = 1;
  });

  $http.get("/api/comments/" + $stateParams.idShow).success(function(comments)
  {
    $scope.comments = comments;
    if (comments[0] == undefined)
    {
      $scope.hasNoComments = true;
    }
    else
    {
      $scope.hasNoComments = false;
    }
  });

  if (Auth.isLoggedIn())
  {
    $http.get("/api/users/me").success(function(user){
      if (user.subscribe_show.indexOf($stateParams.idShow) != -1)
      {
        $scope.subscribed = true;
      }
      else
      {
        $scope.subscribed = false;
      }
      //alert($scope.subscribed + " value of verify -> " + Auth.getCurrentUser().subscribe_show.indexOf($stateParams.idShow) + " array " + Auth.getCurrentUser().subscribe_show);
    });
  }

  /**
   * Subscribe function
   */
  $scope.subscribe = function() {

      $http.put("/api/users/" + Auth.getCurrentUser()._id + "/subscribe/" + $stateParams.idShow)
        .then(function ()
        {
          $scope.subscribed = true;
          $scope.$apply(function(){
            $scope.subscribed = true;
          });
        })
        .catch(function (err) {
          $scope.errors.other = err.message;
        });
  };

  /**
   * Unsubscribe function
   */
  $scope.unsubscribe = function() {
    $http.put("/api/users/" + Auth.getCurrentUser()._id + "/unsubscribe/" + $stateParams.idShow)
      .then(function ()
      {
        $scope.subscribed = false;
        $scope.$apply(function(){
          $scope.subscribed = false;
        });
      })
      .catch(function (err) {
        $scope.errors.other = err.message;
      });
  };

  $scope.addEpisode = function(form)
  {
    if (form.$valid)
    {
      $http.post("/api/comments/", {content: $scope.content, author: Auth.getCurrentUser().name, show_id : $scope.show.show_id, episode_id : "" })
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
