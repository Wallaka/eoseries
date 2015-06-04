"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("episode_delete", {
    url: "/episodes/delete/:show_id",
    templateUrl: "app/shows/episode_delete/delete.html",
    controller: "EpisodeDeleteCtrl"
  });
});
