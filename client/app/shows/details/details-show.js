"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("detailsShow", {
    url: "/details/:idShow",
    templateUrl: "app/shows/details/details-show.html",
    controller: "ShowsDetailsCtrl"
  });
});
