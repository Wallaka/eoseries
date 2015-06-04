"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("episode_edit", {
    url: "/episode/edit/:show_id/:episode_id",
    templateUrl: "app/shows/episode_edit/edit.html",
    controller: "EpisodeEditCtrl"
  });
});
