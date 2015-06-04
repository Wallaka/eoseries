"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("detailsEpisode", {
    url: "/details/:idShow/:idEpisode",
    templateUrl: "app/shows/details/details-episode.html",
    controller: "EpisodeDetailsCtrl"
  });
});
